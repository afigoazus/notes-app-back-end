import TokenManager from '../security/token-manager.js';
import response from '../utils/response.js';

export default async function authenticationToken(req, res, next) {
  const authHeader = req.headers.authorization;

  // 1. Cek apakah header ada dan dimulai dengan 'Bearer '
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return response(
      res,
      401,
      'Unauthorized: Missing or invalid header format',
      null,
    );
  }

  // 2. Ambil token dengan membuang 'Bearer ' (case-insensitive tidak masalah jika pakai replace)
  const token = authHeader.split(' ')[1];

  if (!token) {
    return response(res, 401, 'Unauthorized: Token not found', null);
  }

  try {
    const user = await TokenManager.verify(token, process.env.ACCESS_TOKEN_KEY);
    req.user = user;
    return next();
  } catch (error) {
    // Menangkap 'Access token tidak valid' dari TokenManager
    return response(res, 401, error.message, null);
  }
}

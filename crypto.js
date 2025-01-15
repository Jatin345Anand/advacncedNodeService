const crypto = require('crypto');

// Parameters
const password = 'mySecurePassword';
const salt = crypto.randomBytes(16).toString('hex'); // Generate a random salt
const iterations = 100000; // Recommended: 100,000 or more
const keylen = 64; // 64 bytes = 512 bits
const digest = 'sha512'; // Strong hash algorithm

// Derive the key
const hash = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString('hex');

console.log('Derived Key:', hash);
console.log('Salt:', salt);

import postgres from 'postgres';

// Konfigurasi koneksi
const sql = postgres({
  host: process.env.POSTGRES_HOST,
  port: 5432,
  database: process.env.POSTGRES_DATABASE,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  ssl: {
    rejectUnauthorized: false // Untuk SSL
  },
  transform: {
    undefined: null // Mengubah undefined menjadi NULL
  }
});

export default sql;

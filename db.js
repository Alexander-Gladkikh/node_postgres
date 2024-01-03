import Pool from 'pg-pool';
const pool = new Pool({
    user: "postgres",
    password: "Iehbr1725",
    host: "localhost",
    port: 5432,
    database: 'node_postgres'
});

export default pool

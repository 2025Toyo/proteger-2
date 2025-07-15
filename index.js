
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{
      fontFamily: 'sans-serif',
      padding: '2rem',
      backgroundColor: 'var(--bg)',
      color: 'var(--text)'
    }}>
      <h1>Fundación Proteger</h1>
      <p>Sistema completo de gestión médica y terapéutica.</p>
      <nav style={{ marginTop: '2rem' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link href="/pacientes">👤 Pacientes</Link></li>
          <li><Link href="/archivos">📂 Archivos Médicos</Link></li>
          <li><Link href="/inventario">📦 Inventario</Link></li>
          <li><Link href="/turnos">📅 Turnos</Link></li>
        </ul>
      </nav>
    </main>
  );
}

import styles from './header.module.css'

export function Header() {
    return (
        <div className={styles.container}>
            <img src="/logo.png" alt="Logo" />
            <a href="/">Home</a>
            <a href="">Cardápio</a>
            <a href="/users">Clientes</a>
            <a href="">Sobre</a>
        </div>
    );
}
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/daniloak.png" />
                    <div className={styles.authorInfo}>
                        <strong>Danilo Kasparian</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="11 de Maio às 08:15" dateTime="2022-05-11 08:15h">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos voluptatum soluta sed </p>
                <p>consectetur tempore ea, corporis iure eum cumque aliquid libero ad corrupti laboriosam reiciendis non explicabo! Praesentium, quod.</p>
                <p>
                    <a href=''>#reactowns</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário"></textarea>

                <footer><button type="submit">Publicar</button></footer>

            </form>
        </article>
    )
}
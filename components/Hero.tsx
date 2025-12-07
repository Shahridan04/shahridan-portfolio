import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.backgroundPattern}></div>
      <div className={styles.backgroundImage}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.highlight}>Shahridan</span>
          </h1>
          <p className={styles.subtitle}>
            Creative Professional specializing in Video Editing, Photography & Web Development
          </p>
          <p className={styles.description}>
            I bring stories to life through visual media and digital experiences. 
            From cinematic video edits to stunning photography and modern web solutions.
          </p>
          <div className={styles.buttons}>
            <a href="#portfolio" className={styles.primaryBtn}>
              View My Work
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

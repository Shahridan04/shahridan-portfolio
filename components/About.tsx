import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.backgroundPattern}></div>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.intro}>
              I'm a creative professional passionate about visual storytelling and digital innovation. 
              With expertise across multiple disciplines, I bring a unique perspective to every project.
            </p>
            <div className={styles.skills}>
              <div className={styles.skillCategory}>
                <h3>🎬 Video Editing</h3>
                <p>Professional video editing with expertise in color grading, motion graphics, and post-production. Creating engaging narratives that captivate audiences.</p>
              </div>
              <div className={styles.skillCategory}>
                <h3>📸 Photography</h3>
                <p>Capturing moments through the lens with an eye for composition, lighting, and storytelling. Specializing in portrait, event, and creative photography.</p>
              </div>
              <div className={`${styles.skillCategory} ${styles.webDevCard}`}>
                <h3>💻 Web Development</h3>
                <p>Building modern, responsive websites and web applications. Proficient in React, Next.js, and creating seamless user experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

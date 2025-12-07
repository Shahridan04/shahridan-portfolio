'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './Portfolio.module.css'

type PortfolioCategory = 'all' | 'video' | 'photo' | 'web'

interface PortfolioItem {
  id: number
  title: string
  category: PortfolioCategory
  description: string
  image?: string
  link?: string
  videoUrl?: string
  showModal?: boolean
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Takbir Raya - PSMZA Organization',
    category: 'video',
    description: 'A collaborative Takbir Raya video production for PSMZA, featuring all organization clubs. Coordinated multiple teams, handled full production from recording to post-production, including cinematography, editing, and color grading.',
    videoUrl: 'https://www.youtube.com/embed/n9mQkZbLVeg',
  },
  {
    id: 2,
    title: 'Horror Story Podcast - Multimedia Club',
    category: 'video',
    description: 'Directed and edited a horror story podcast series for multimedia club. Showcasing expertise in podcast-style video production, including narrative editing, atmospheric sound design, and engaging visual storytelling. Part of a multi-episode series.',
    videoUrl: 'https://www.youtube.com/embed/KglXeqXJL5M',
  },
  {
    id: 3,
    title: 'Wedding Photography - Complete Event Coverage',
    category: 'photo',
    description: 'Comprehensive wedding photography capturing every precious moment from preparation to ceremony. Documented the entire wedding journey including pre-wedding rituals, bridal preparation, ceremony, and reception. Delivered high-quality event photography showcasing attention to detail and storytelling through images.',
    image: '/Media/Wedding 1.jpg',
    link: 'https://drive.google.com/drive/folders/',
  },
  {
    id: 4,
    title: 'Khursus Haji Event Photography',
    category: 'photo',
    description: 'Documented a comprehensive Hajj course event, capturing educational moments and community engagement. Demonstrated strong interpersonal skills by working effectively with older participants, ensuring comfortable and respectful photography sessions. Showcased ability to communicate clearly and adapt to diverse client needs while delivering professional event coverage.',
    image: '/Media/Khursus Haji.JPG',
    link: 'https://drive.google.com/drive/folders/1E2Cc0EhlnEZNjKwqTb6Sm942nImKGt5M?usp=drive_link',
  },
  {
    id: 5,
    title: 'Raise The Bar Fitness - Gym Website',
    category: 'web',
    description: 'Developed a modern, professional website for a local gym in Dungun. Created a sleek dark-themed design with responsive layout, featuring hero sections, navigation, and call-to-action elements. Delivered a complete web solution that enhances the gym\'s online presence and user experience.',
    image: '/Media/Gym Website.png',
    showModal: true,
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all')
  const [modalImage, setModalImage] = useState<string | null>(null)

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  const handleImageClick = (item: PortfolioItem) => {
    if (item.showModal && item.image) {
      setModalImage(item.image)
    }
  }

  const closeModal = () => {
    setModalImage(null)
  }

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.backgroundPattern}></div>
      <div className="container">
        <h2 className="section-title">My Portfolio</h2>
        
        <div className={styles.filters}>
          <button
            className={activeCategory === 'all' ? styles.active : ''}
            onClick={() => setActiveCategory('all')}
          >
            All Work
          </button>
          <button
            className={activeCategory === 'video' ? styles.active : ''}
            onClick={() => setActiveCategory('video')}
          >
            Video Editing
          </button>
          <button
            className={activeCategory === 'photo' ? styles.active : ''}
            onClick={() => setActiveCategory('photo')}
          >
            Photography
          </button>
          <button
            className={activeCategory === 'web' ? styles.active : ''}
            onClick={() => setActiveCategory('web')}
          >
            Web Development
          </button>
        </div>

        <div className={styles.grid}>
          {filteredItems.map((item) => (
            <div key={item.id} className={styles.item}>
              {item.videoUrl ? (
                <div className={styles.videoContainer}>
                  <iframe
                    src={item.videoUrl}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.videoEmbed}
                  ></iframe>
                </div>
              ) : item.image ? (
                item.showModal ? (
                  <div 
                    onClick={() => handleImageClick(item)}
                    className={styles.imageLink}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className={styles.imageContainer}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className={styles.portfolioImage}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className={styles.imageOverlay}>
                        <span className={styles.viewGallery}>View Full Image →</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.imageLink}
                  >
                    <div className={styles.imageContainer}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className={styles.portfolioImage}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className={styles.imageOverlay}>
                        <span className={styles.viewGallery}>View Gallery →</span>
                      </div>
                    </div>
                  </a>
                )
              ) : (
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderContent}>
                    <span className={styles.categoryBadge}>{item.category}</span>
                  </div>
                </div>
              )}
              <div className={styles.itemInfo}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.videoUrl && (
                  <a 
                    href={`https://youtu.be/${item.videoUrl.split('/embed/')[1]}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.videoLink}
                  >
                    Watch on YouTube →
                  </a>
                )}
                {item.link && !item.videoUrl && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.videoLink}
                  >
                    View Full Gallery →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal}>×</button>
            <div className={styles.modalImageContainer}>
              <Image
                src={modalImage}
                alt="Full size preview"
                width={1400}
                height={900}
                className={styles.modalImage}
                style={{ width: '100%', height: 'auto', maxHeight: '90vh', objectFit: 'contain' }}
                unoptimized
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

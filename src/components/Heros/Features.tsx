import { css } from '@/styled-system/css';
import { Music, AudioLines, Share2 } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Music />,
    content:
      'Choose from a diverse selection of music to enhance your concentration',
  },
  {
    id: 2,
    icon: <AudioLines />,
    content:
      'Enjoy your chosen music without any distractions, allowing for focused work',
  },
  {
    id: 3,
    icon: <Share2 />,
    content: 'Easily and quickly share your favorite music selections',
  },
];

export const Features = () => {
  return (
    <section
      className={css({
        maxW: '1000px',
        paddingX: '1rem',
        mx: 'auto',
      })}
    >
      <h1
        className={css({
          color: 'var(--colors-text)',
          fontWeight: '500',
          textAlign: 'center',
          fontSize: 'lg',
        })}
      >
        Features
      </h1>
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: '1fr',
          mt: '3rem',
          gap: '2rem',
          sm: {
            gridTemplateColumns: '1fr 1fr',
          },
          md: {
            gridTemplateColumns: '1fr 1fr 1fr',
          },
        })}
      >
        {features.map((feature) => (
          <div key={feature.id}>
            <div
              className={css({
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                color: 'var(--colors-text)',
                fontSize: '1rem',
                mb: '1rem',
                bgColor: 'var(--colors-input-focus)',
                maxW: 'max-content',
                mx: 'auto',
                p: '.7rem',
              })}
            >
              {feature.icon}
            </div>
            <p
              className={css({
                color: 'var(--colors-text-muted)',
                fontWeight: '500',
                textAlign: 'center',
                fontSize: 'sm',
              })}
            >
              {feature.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

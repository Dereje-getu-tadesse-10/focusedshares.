import { css } from '@/styled-system/css';
import { Music, AudioLines, Share2 } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Music />,
    title: 'Select your soundtrack',
    content:
      'Choose from a diverse selection of music to enhance your concentration',
  },
  {
    id: 2,
    icon: <AudioLines />,
    title: 'Distraction-free music',
    content:
      'Enjoy your chosen music without any distractions, allowing for focused work',
  },
  {
    id: 3,
    icon: <Share2 />,
    title: 'Instant music sharing',
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
        mt: '3rem',
      })}
    >
      <h1
        className={css({
          color: 'var(--colors-text)',
          fontWeight: 'semibold',
          textAlign: 'center',
          fontSize: '1xl',
        })}
      >
        Features
      </h1>
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: '1fr',
          mt: '2rem',
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
            <h1
              className={css({
                color: 'var(--colors-text)',
                textAlign: 'center',
                fontWeight: 'semibold',
                mb: '.7rem',
              })}
            >
              {feature.title}
            </h1>
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

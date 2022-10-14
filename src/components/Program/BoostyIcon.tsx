export const BoostyIcon = ({ link }: { link: string }) => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
      style={{
        width: '24px',
        height: '24px',
      }}
    >
      <svg viewBox='0 0 235.6 292.2' fill='white'>
        <path
          d='M44.3,164.5L76.9,51.6H127l-10.1,35c-0.1,0.2-0.2,0.4-0.3,0.6L90,179.6h24.8c-10.4,25.9-18.5,46.2-24.3,60.9
		c-45.8-0.5-58.6-33.3-47.4-72.1 M90.7,240.6l60.4-86.9h-25.6l22.3-55.7c38.2,4,56.2,34.1,45.6,70.5
		c-11.3,39.1-57.1,72.1-101.7,72.1C91.3,240.6,91,240.6,90.7,240.6z'
        />
      </svg>
    </a>
  )
}

export const RegulationsModal = () => {
  return (
    <>
      <input type='checkbox' id='regulations' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative h-[750px] max-w-2xl bg-neutral'>
          <label
            htmlFor='regulations'
            className='btn-sm btn-circle btn absolute right-2 top-2'
          >
            ✕
          </label>
          <article className='prose'>
            <h1>Регламент</h1>
            <p>
              Конференция YAMAL.DEV CONF создана как место, где участники могут
              обсудить друг с другом разработку и все, что с ней связано. Все
              люди разные, и в пылу обсуждений легко огорчить другого участника
              словом или поступком. Чтобы сделать конференцию комфортной для
              участников, мы все соглашаемся соблюдать следующие правила:
            </p>
            <ul className='list-disc'>
              <li>Не даем субъективных оценок людям и не дискриминируем их</li>
              <li>Не обсуждаем политику</li>
              <li>Не обсуждаем религию</li>
              <li>Не обсуждаем секс и отношения</li>
              <li>Не обсуждаем деньги</li>
            </ul>
            <p>
              Участвуя в конференции вы соглашаетесь соблюдать эти правила и
              покинуть конференцию по просьбе организаторов в случае их
              нарушения. Как организаторы мы понимаем всю сложность соблюдения
              подобных правил (иначе не было бы столько скандалов по всему миру)
              и обещаем, что будем серьезно и внимательно рассматривать все
              конфликтные случаи. Если вы видите нарушение этих правил на
              конференции или ошибку организаторов в их применении - пожалуйста,
              напишете мне в Телеграм на{' '}
              <a
                className='link-secondary'
                href='https://t.me/LYY14'
                target='_blank'
                rel='noreferrer'
              >
                @LYY14
              </a>
            </p>
          </article>
          <div className='modal-action'>
            <label htmlFor='regulations' className='btn-secondary btn'>
              Готово
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

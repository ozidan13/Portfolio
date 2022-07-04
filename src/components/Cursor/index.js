import './index.scss'

const Cursor = () => {
  let mouseCursor = document.querySelector('.cursor');
  window.addEventListener('mousemove', cursor);
  function cursor(e) {
      mouseCursor.style.top = e.pageY + 'px';
      mouseCursor.style.left = e.pageX + 'px';
  }

  return (
    <>
      <div className='cursor'></div>
    </>
  )
}

export default Cursor

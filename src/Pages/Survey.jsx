const Survey = () => {

  const openWindow = (url) => {
    window.open(url, '_blank')
  }

  return (
    <>
      <div className='py-10'>
        <div
          className="lg:w-1/2 sm:w-full relative mx-auto max-w-screen-2xl px-4 sm:px-6"
        >
          <div
            className="text-center"
          >
            Kaji selidik di bawah dapat membantu saya untuk lebih mengenali demografik rakyat di parlimen Sekijang ini dengan lebih tepat.
            <div className="text-center mt-10">Sila  <strong> allow popup</strong> untuk laman ini</div>
            <div className="text-center mt-2">
              <div>
                <button className="rounded-md px-4 bg-blue-600 p-2 text-white" type="button" onClick={() => openWindow('https://forms.gle/LukWR34zEahcF35Q6')}>
                  Teruskan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Survey
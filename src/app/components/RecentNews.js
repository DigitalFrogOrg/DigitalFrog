import React from 'react'

function RecentNews() {
  return (
    <section className='recent_news'>
        <div className='container'>
            <div className='recent_news_head'>
                <h2>Recent News & Tech Insights</h2>
            </div>
            <div className='row'>
                <div className='col-sm-4'>
                    <div className='blog_col'>
                        <img src='/images/blog01.png' alt='Blog 01' className='img-fluid'/>
                        <span className='date'>28 / Aug / 2024</span>
                        <h4>How To Develop an App For Apple Vision Pro</h4>
                        <p>Yellow is a development company that creates its own products. It allows us to gain extensive knowledge about the product life cycle and apply it to your solution.</p>
                        <button type='button' className='blog-btn'>#Development</button>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='blog_col'>
                        <div className='blog_col'>
                            <img src='/images/blog02.png' alt='Blog 02' className='img-fluid'/>
                            <span className='date'>28 / Aug / 2024</span>
                            <h4>How To Develop an App For Apple Vision Pro</h4>
                            <p>Yellow is a development company that creates its own products. It allows us to gain extensive knowledge about the product life cycle and apply it to your solution.</p>
                            <button type='button' className='blog-btn'>#Development</button>
                        </div>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='blog_col'>
                        <div className='blog_col'>
                            <img src='/images/blog03.png' alt='Blog 03' className='img-fluid'/>
                            <span className='date'>28 / Aug / 2024</span>
                            <h4>How to Integrate ChatGPT into Your Existing Software</h4>
                            <p>Yellow is a development company that creates its own products. It allows us to gain extensive knowledge about the product life cycle and apply it to your solution.</p>
                            <button type='button' className='blog-btn'>#Development</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default RecentNews

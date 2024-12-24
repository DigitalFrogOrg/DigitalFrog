import React from 'react'

function RecentNews() {
  return (
    <section className='recent_news appMobilePaddingSmall'>
        <div className='container'>
            <div className='recent_news_head'>
                <h2 className='mainHeadingMobile'>Recent News & Tech Insights</h2>
            </div>
            <div className='row'>
                <div className='col-sm-4'>
                    <div className='blog_col'>
                        <img src='/images/recent2.png' alt='Blog 01' className='img-fluid'/>
                        <span className='date'>28 / Aug / 2024</span>
                        <h4 className='subHeading'>How To Develop an App For Apple Vision Pro</h4>
                        <p>Delve into the Apple Vision Pro app development with us and unleash...</p>
                        <button type='button' className='blog-btn'>#softwaredevelopment</button>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='blog_col'>
                        <div className='blog_col'>
                            <img src='/images/recentOne.png' alt='Blog 02' className='img-fluid'/>
                            <span className='date'>28 / Aug / 2024</span>
                            <h4 className='subHeading'>AI Technology In Education Industry: Detailed Article</h4>
                            <p>Forget outdated classrooms! AI is revolutionizing education, creati...</p>
                            <button type='button' className='blog-btn'>#softwaredevelopment</button>
                        </div>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='blog_col'>
                        <div className='blog_col'>
                            <img src='/images/recent3.png' alt='Blog 03' className='img-fluid'/>
                            <span className='date'>28 / Aug / 2024</span>
                            <h4 className='subHeading'>How to Integrate ChatGPT into Your Existing Software</h4>
                            <p>Discover the process of incorporating ChatGPT into your current sof...</p>
                            <button type='button' className='blog-btn'>#softwarechat</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default RecentNews

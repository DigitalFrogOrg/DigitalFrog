import React from 'react';

function Popup({ togglePopup }) {
    return (
        <div className='main-popup'>
            <div className='container h-100'>
                <div className='row h-100'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6 h-100 d-flex align-items-center justify-content-center'>
                        <div className="popup-inner w-100">
                            <h2>Ready to discuss your project with us?</h2>
                            <form className='popup-form'>
                                <input placeholder='Name*' />
                                <input placeholder='Phone number *' />
                                <input placeholder='Email *' />
                                <textarea placeholder='Description *' rows={3}>
                                </textarea>
                                <label>Your budget (USD)</label>
                                <div className='budget-btns'>
                                    <button>20-50K</button>
                                    <button>50-100K</button>
                                    <button>100-500K</button>
                                    <button>500-1,000K</button>
                                    <button>1,000K</button>
                                </div>
                            </form>
                            <div className='mt-4 d-flex align-items-center justify-content-end gap-4'>
                                <button onClick={togglePopup} type='button' className='cancel-btn'>Cancel</button>
                                <button type='submit' className='second-btn'>Send Message</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
        </div>
    );
}
export default Popup;
import React,{useState} from 'react';
import { submitForm } from '@/api/formServices';

function Popup({ togglePopup }) {
    const [formData,setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        description: "",  
        budget: "",
    })
    const [loading,setLoading] = useState(false)
    const budgets = ['20-50K','50-100K','100-500K','500-1,000K','1,000K']

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        for (const [key, value] of Object.entries(formData)) {
            if (!value.trim()) { 
                alert(`Please fill in the ${key} field.`);
                return;
            }
        }
        setLoading(true)
        try {
            const payload = new FormData();
            payload.append("fullName", formData.fullName);
            payload.append("email", formData.email);
            payload.append("phoneNumber", formData.phoneNumber);
            payload.append("budget", formData.budget);
            payload.append("description", formData.description);
            const response = await submitForm(payload)
            alert(response.data.message)
        } catch (error) {
            alert("Failed to submit form.")
        }
        setLoading(false)
        setFormData({
            fullName: "",
            email: "",
            phoneNumber: "",
            budget: "",
            description: "",  
        })
        togglePopup()
    }

    const handleBudget = (val)=>{
        setFormData({...formData,budget:val})
    }

    return (
        <div className='main-popup'>
            <div className='container h-100'>
                <div className='row h-100'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6 h-100 d-flex align-items-center justify-content-center'>
                        <div className="popup-inner w-100">
                            <h2>Ready to discuss your project with us?</h2>
                            <form onSubmit={handleSubmit} className='popup-form'>
                                <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder='Full name*' />
                                <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder='Phone number *' />
                                <input name="email" value={formData.email} onChange={handleChange} placeholder='Email *' />
                                <textarea name="description" value={formData.description} onChange={handleChange} placeholder='Description *' rows={3}>
                                </textarea>
                                <label>Your budget (USD)</label>
                                <div className='budget-btns'>
                                    {budgets?.map((item,i)=>(
                                        <button type='button' onClick={()=>handleBudget(item)} key={i} className={formData.budget === item ? 'budget-btn-active' : ''}>{item}</button>
                                    ))}
                                </div>
                            <div className='mt-4 d-flex align-items-center justify-content-end gap-4'>
                                <button onClick={togglePopup} type='button' className='cancel-btn'>Cancel</button>
                                <button type='submit' disabled={loading} className='second-btn'>Send Message</button>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
        </div>
    );
}
export default Popup;
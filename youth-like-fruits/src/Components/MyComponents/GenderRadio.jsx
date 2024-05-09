import './GenderRadio.css'
export default function GenderRadio({ selectedOption, onOptionSelection }){


    return (
        <div>
            <label htmlFor="gender" className='gender-label'>Gender</label>
            <div onChange={onOptionSelection} className='checkbox-input-container'>
                <div className="option">
                    <input type="radio" id="male" value="male" name="gender" checked={selectedOption === "male"} />
                    <label htmlFor="male">Male</label>
                </div>
                <div className="option">
                    <input type="radio" id="female" value="female" name="gender" checked={selectedOption === "female"} />
                    <label htmlFor="female">Female</label>
                </div>

            </div>
        </div>
    );
};
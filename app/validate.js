import React from "react";



function Validate() {

    return (
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>

            <form id="form">

            <div className="form-group">

                <h1 style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center'}}>
                    Оставить заявку</h1>

                    <div className="form-group-none">
                        <label htmlFor="ph">Телефон*</label>
                        <input className="form-control" placeholder="+375 (29) 999-99-99" name="ph" autoComplete="off" maxLength={50} required/>
                    </div>

                    <br/>

                    <div className="form-group-none">
                        <label htmlFor="nm">Ваше имя*</label>
                        <input className="form-control" name="nm" autoComplete="off" maxLength={50} required/>
                    </div>

                    <br/>

                    <div className="form-group-none">
                        <label htmlFor="ur">Ссылка на соц.сети</label>
                        <input className="form-control" placeholder="telegram, viber, почта" name="ur" autoComplete="off" maxLength={50}/>
                    </div>

                    <br/>

                    <div className="form-group-none">
                        <label htmlFor="ta">Комментарий</label>
                        <input className="form-control-ta" name="ta" autoComplete="off" maxLength={150}/>
                    </div>

                    <br/>

                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <button  type="submit" className="button-payment">ОТПРАВИТЬ</button>
                          
                    </div>

                    <p-h3><strong>Нажимая на кнопку «Отправить», Вы даете согласие на обработку персональных данных.</strong></p-h3>
            </div>
            </form>
        </div>
    )
}

export default Validate
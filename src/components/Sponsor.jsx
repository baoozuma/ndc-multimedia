import React, { Component } from "react";
import {Brand} from "../contentDatabase/Brand"
import AOS from 'aos';
import 'aos/dist/aos.css';
class Sponsor extends Component {
    render() {
        return (
            <section className="brand" data-aos="fade-left" data-aos-once="true" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200" >
                <h1>ĐỐI TÁC<strong>&nbsp;ỦNG HỘ VÀ TÀI TRỢ</strong></h1>
                <p>Chúng tôi muốn bày tỏ lòng tri ân sâu sắc nhất đến nhà tài trợ của chúng tôi vì sự hỗ trợ quý giá này. Với sự đồng hành này, chúng tôi có thể thực hiện những mục tiêu và mang tầm nhìn xa trở thành hiện thực. Chúng tôi thấu hiểu giá trị mà đóng góp của họ mang lại và mãi mãi biết ơn sự đối tác vô cùng đặc biệt này.</p>
                <div className="local">
                    {Brand.map((item) => (
                        <div className="brand-item">
                            <img src={item.logo} className="brand-logo"></img>
                            <h4 className="brand-name">{item.name}</h4>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
}
export default Sponsor;
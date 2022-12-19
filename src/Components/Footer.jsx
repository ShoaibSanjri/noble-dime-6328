function Footer(){
    const styles = {
        // border:"red 1px solid",
        backgroundColor:"#181818",
        color:"white",
        display:"flex",
        
        
        
    }
    return <section style={styles} >
        <div style={{margin:"20px 50px 20px 120px "}} >
            <span style={{color:"#FDD835"}} >CUSTOMER SERVICE</span>
            <ul style={{marginTop:"20px",marginBottom:"30px",listStyleType:"none"}} >
                <li>Contact us</li>
                <li>Track Order</li>
                <li>Return Order</li>
                <li>Cancel Order</li>
            </ul>
            <p>15 days return policy</p>
            <p>Cash on Delivery</p>
        </div>
        <div style={{margin:"20px 50px 20px 0px "}} >
        <span style={{color:"#FDD835"}} >COMPANY</span>
            <ul style={{marginTop:"30px",listStyleType:"none"}} >
                <li >About us</li>
                <li>We're Hiring</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Blog</li>
            </ul>
            <p style={{color:"#FDD835",marginTop:"20px"}} >DOWNLOAD THE APP</p>
            <div style={{display:"flex",marginTop:"20px",gap:"10px"}} >
                <img src="https://images.bewakoof.com/web/app_android_v1.png" alt="" />
                <img src="https://images.bewakoof.com/web/app_ios_v1.png" alt="" />
            </div>
        </div>
        <div style={{margin:"20px 50px 20px 0px "}} >
            <p style={{color:"#FDD835"}} >CONNECT WITH US</p>
            <li style={{display:"flex",gap:"10px",marginTop:"20px"}} > <img src="https://cdn.iconscout.com/icon/free/png-128/facebook-53-114723.png" width="20px" alt="" /> <a href="https://www.facebook.com/bewakoofcom">4.7M People Like this  </a></li>
            <li style={{display:"flex",gap:"10px"}} > <img src="https://cdn.iconscout.com/icon/free/png-128/instagram-53-151118.png" width="20px" alt="" /> <a href="https://www.facebook.com/bewakoofcom">1M Followers  </a></li>
        </div>

        <div style={{margin:"20px 50px 20px 0px "}} >
            < p style={{color:"#FDD835",marginBottom:"20px"}} >KEEP UP TO DATE</p>
            <input type="email" name="email" id="" placeholder="Enter Email Id" />
            <button style={{color:"#FDD835",marginLeft:"10px"}} >SUBSCRIBE</button>
        </div>
        
    </section>
}

export default Footer;
import Event from '../components/Event';
function Home() {
    return (
      <div className="container">
        <div>Welcome to Next.js!</div>
        <Event />
        <style jsx> {`
          .container {
            width: 407px;
            height: 497px;

            background: #FFFFFF;
            border: 1px solid #5F5F5F;
            box-sizing: border-box;
            box-shadow: 0px 4px 4px rgba (0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
            backdrop-filter: blur(4px);
            border-radius: 4px;
          }
        `}

        </style>
      </div>
    
    )
    
  }
  
  export default Home;
import React from 'react'

class Video extends React.Component {
  render() {
    return (
      <div>
        <div className={`wistia_embed wistia_async_${this.props.hashedId}`} style={{height: '360px', width: '640px'}}>&nbsp;</div>
      </div>
    )
  }

  componentDidMount() {
    console.log("this:", this)
    if (!document.getElementById("wistia_script")) {
      var wistiaScript = document.createElement("script");
      wistiaScript.id = "wistia_script"
      wistiaScript.type = "text/javascript"
      wistiaScript.src = "https://fast.wistia.dev/assets/external/E-v1.js"
      wistiaScript.async = true
      document.body.appendChild(wistiaScript);
    }

    window._wq = window._wq || [];
    console.log('WINDOW._wq 1: ', window._wq.length)
    _wq.push({
      id: this.props.hashedId,
      onReady: (video) => {
        console.log('VID: ', video)
        this.handle = video
      }
    });
    console.log('WINDOW._wq 2: ', _wq.length)

  }

  componentWillUnmount() {
    console.log("this.handle in componentWillUnmount:", this.handle);
    this.handle && this.handle.remove();
  }
}

export default Video;


// import React from 'react';

// export default
// class Video extends React.Component {

// componentWillMount() {
//     const script1 = document.createElement("script");
//     const script2 = document.createElement("script");

//     script1.src = "https://fast.wistia.com/embed/medias/videolink.jsonp";
//     script1.async = true;

//     script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
//     script2.async = true;

//     document.body.appendChild(script1);
//     document.body.appendChild(script2);
// }

// render() {
//     return (
//         <div>
//             <div className="wistia_embed wistia_async_videolink videoFoam=true"/>
//         </div>
//         );
//     };
// }

// const Child1 = React.forwardRef((props, ref) => {
//   return <script ref={ref}>Child1</script>
// });

// const Child2 = React.forwardRef((props, ref) => {
//   return <script ref={ref}>Child1</script>
// });

// const Video = () => {
//   const child1 = useRef(null);
//   const child2 = useRef(null);

//   return (
//       <>
//          <Child1 ref={child1} />
//          <Child2 ref={child2} />
//       </>
//   )
// }
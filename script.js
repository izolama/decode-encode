class decode extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        'encoded': '',
        'decoded': ''
      }
    }
    
    handleDecodeChange = (e) => {
      var encoded = e.target.value;
      this.setState({
        'encoded': encoded,
        'decoded': atob(encoded)
      });
    };
    handleEncodeChange = (e) => {
      var decoded = e.target.value;
      this.setState({
        'decoded': decoded,
        'encoded': btoa(decoded)
      });
    };
    render() {
      return (
        <div className='EncoderDecoder'>
          <h1>BASE64</h1>
          <div className='EncoderDecoder-decoded'>
            <h2>Plain text / Decoded</h2>
            <textarea value={this.state.decoded} onChange={this.handleEncodeChange} placeholder='Input for encoding / output for decoding...'></textarea>
            <Download target={this.state.decoded} />
          </div>
          <div className='EncoderDecoder-encoded'>
            <h2>BASE64 / Encoded</h2>
            <textarea value={this.state.encoded} onChange={this.handleDecodeChange} placeholder='Input for decoding / output for encoding...'></textarea>
            <Download target={this.state.encoded} />
          </div>
        </div>
      );
    }
  };
  class Download extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        'download': 'file.txt'
      };
    }
    handleChange = (e) => {
      this.setState({
        'download': e.target.value
      });
    };
    render() {
    
      var link = 'data:application/octet-stream;charset=utf-8;base64,' + btoa(this.props.target);
      return (
        <div>
          <select value={this.state.download} onChange={this.handleChange}>
            <option value='file.txt'>Plain text</option>
            <option value='file.pdf'>Portable Document Format</option>
            <option value="file.xlsx">Microsoft Excel Document</option>
            <option value="file.docx">Microsoft Word Document</option>
          </select>
          <a href={link} target='_blank' download={this.state.download}>Download</a>
        </div>
      );
    }
  };
  ReactDOM.render(<decode/>, document.getElementById("app"));
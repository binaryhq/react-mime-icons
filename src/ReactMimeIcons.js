'use strict'
/** 
 * @author Ningappa Kamate 
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import FaFileImageO from "./Icons/fa/file-image-o"
import FaFileAudioO from "./Icons/fa/file-audio-o"
import FaFileMovieO from "./Icons/fa/file-movie-o"
import FaFileWordO from "./Icons/fa/file-word-o"
import FaFileExcelO from "./Icons/fa/file-excel-o"
import FaFilePowerpointO from "./Icons/fa/file-powerpoint-o"
import FaFileTextO from "./Icons/fa/file-text-o"
import FaFileAlt from "./Icons/fa/file-alt"
import FaFileCodeO from "./Icons/fa/file-code-o"
import FaFileArchiveO from "./Icons/fa/file-archive-o"
import FaFileO from "./Icons/fa/file-o"

const iconsComponents = {
    //Fontawesome Icons
    "fa-FileImageO" : FaFileImageO,
    "fa-FileAudioO" : FaFileAudioO,
    "fa-FileMovieO" : FaFileMovieO,
    "fa-FileWordO" : FaFileWordO,
    "fa-FileExcelO" : FaFileExcelO,
    "fa-FilePowerpointO" : FaFilePowerpointO,
    "fa-FileTextO" : FaFileTextO,
    "fa-FileAlt" : FaFileAlt,
    "fa-FileCodeO" : FaFileCodeO,
    "fa-FileArchiveO" : FaFileArchiveO,
    "fa-FileO" : FaFileO,
}
const mappings = {
    // Media
    FileImageO: /^image\//,
    FileAudioO: /^audio\//,
    FileMovieO: /^video\//,
    // Documents
    FilePdfO: 'application/pdf',
    FileWordO: [
        /ms-?word/,
        'application/vnd.oasis.opendocument.text',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.openxmlformats-officedocument.wordprocessingml'
    ],
    FileExcelO: [
        /ms-?excel/,
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.openxmlformats-officedocument.spreadsheetml',
        'application/vnd.oasis.opendocument.spreadsheet',
    ],
    FilePowerpointO: [
        /ms-?powerpoint/,
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'application/vnd.openxmlformats-officedocument.presentationml',
        'application/vnd.oasis.opendocument.presentation'
    ],
    FileAlt: 'text/plain',
    FileTextO: 'text/plain',
    FileCodeO: [
        'text/html',
        'text/javascript',
        'application/json'
    ], 
    FileArchiveO: [
        /^application\/x-(g?tar|xz|compress|bzip2|g?zip)$/,
        /^application\/x-(7z|rar|zip)-compressed$/,
        /^application\/(zip|gzip|tar)$/
    ]
};

const match =  (mimetype, cond)=> {
    if (Array.isArray(cond)) {
      return cond.reduce(function (v, c) {
        return v || match(mimetype, c)
      }, false)
    } else if (cond instanceof RegExp) {
      return cond.test(mimetype)
    } else if (cond === undefined) {
      return true
    } else {
      return mimetype === cond
    }
  }
var cache = {}
const resolve  = (mimetype)=> {
    if (cache[mimetype]) {
      return cache[mimetype]
    }  
    for (const [icon, condition] of Object.entries(mappings)) {        
        if (match(mimetype, condition)) {
            cache[mimetype] = icon
            return icon
          }
      }
  }
class FileMimeIcons extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { mimetype } = this.props;
        const MyComponent = iconsComponents[`${type}-${resolve(mimetype)}`];        
        if (MyComponent) {            
            return <MyComponent {...this.props} />
        } 
        return <FaFileO {...this.props}/>
    }
}

FileMimeIcons.propTypes = {
    mimetype: PropTypes.string,
    type : PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string    
};
FileMimeIcons.defaultProps ={
  type : "fa",
  size : "1em"
}

export default FileMimeIcons;

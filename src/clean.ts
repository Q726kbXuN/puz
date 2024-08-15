import { Puzzle } from '.';

const chars: {[id: number]: string; } = {
  9: ' ', 10: ' ', 13: ' ', 133: '', 134: ' ', 135: ' ', 140: ' ', 142: ' ', 144: ' ', 145: ' ', 146: ' ', 147: ' ', 
  148: ' ', 150: ' ', 151: ' ', 154: ' ', 160: ' ', 161: '!', 162: 'cents', 163: 'Pounds', 165: 'Yen', 
  167: '[Section sign]', 169: '[Copyright symbol]', 172: '', 173: '', 174: '[Registered trademark]', 175: '', 
  176: 'degrees', 177: '+/-', 178: '2', 180: "'", 182: '[Pilcrow]', 183: '*', 185: '1', 186: 'degrees', 188: '1/4', 
  189: '1/2', 190: '3/4', 191: '?', 192: 'A', 193: 'A', 194: 'A', 195: 'A', 196: 'A', 197: 'A', 198: 'AE', 199: 'C', 
  200: 'E', 201: 'E', 202: 'E', 203: 'E', 204: 'I', 205: 'I', 206: 'I', 208: 'D', 209: 'N', 210: 'O', 211: 'O', 
  212: 'O', 213: 'O', 214: 'O', 215: '*', 216: 'O', 218: 'U', 220: 'U', 223: 'B', 224: 'a', 225: 'a', 226: 'a', 
  227: 'a', 228: 'a', 229: 'a', 230: 'ae', 231: 'c', 232: 'e', 233: 'e', 234: 'e', 235: 'e', 236: 'i', 237: 'i', 
  238: 'i', 239: 'i', 240: 'o', 241: 'n', 242: 'o', 243: 'o', 244: 'o', 245: 'o', 246: 'o', 247: '/', 248: 'o', 
  249: 'u', 250: 'u', 251: 'u', 252: 'u', 257: 'a', 259: 'a', 261: 'a', 263: 'c', 268: 'C', 269: 'c', 275: 'e', 
  297: 'i', 304: 'I', 305: 'i', 322: '', 324: 'n', 333: 'o', 338: 'AE', 339: 'ae', 345: 'r', 346: 'S', 351: 's', 
  352: 'S', 353: 's', 361: 'u', 363: 'u', 382: 'z', 402: 'f', 432: 'u', 464: 'i', 601: 'e', 621: '', 624: '', 
  628: 'N', 688: 'h', 690: 'Palatalization', 691: 'r', 695: 'w', 699: "'", 701: "'", 710: '^', 738: 's', 769: '', 
  916: '[Greek letter delta]', 919: 'H', 929: 'P', 931: '[Greek letter sigma]', 937: '[Greek letter omega]', 
  945: 'Greek letter alpha', 946: '[Greek letter beta]', 948: 'o', 950: '', 951: '[Greek Letter Eta]', 
  952: '[Greek letter theta]', 955: '[Greek letter lambda]', 956: 'u', 957: '', 958: '', 960: 'Pi', 961: 'p', 
  964: '', 967: '', 968: '[Greek letter psi]', 969: 'w', 1009: 'g', 1071: 'R', 2090: '', 2934: '', 3607: '', 
  3611: '', 3618: '', 3619: '', 3624: '', 3632: '', 3647: '[Thai Currency]', 3648: '', 3652: '', 3725: '', 3732: '', 
  3738: '', 3754: '', 3760: '', 3762: '', 3765: '', 6496: '', 6503: '', 6637: '', 7335: '', 7392: '', 7491: 'a', 
  7497: 'e', 7511: 't', 7512: 'u', 7584: 'f', 7589: '', 7590: 'x', 7789: 't', 7843: 'a', 7845: 'a', 7865: 'e', 
  7871: 'e', 7879: 'e', 7885: 'o', 7887: 'o', 7889: 'o', 7897: 'o', 7903: '', 7909: 'u', 7911: 'u', 7921: 'u', 
  8195: ' ', 8200: ' ', 8201: ' ', 8203: '', 8205: '', 8209: '-', 8211: '-', 8212: '-', 8216: "'", 8217: "'", 
  8220: '"', 8221: '"', 8224: '[Dagger]', 8225: '[Dagger]', 8226: '*', 8230: '...', 8239: ' ', 8240: '%', 8242: "'", 
  8243: '"', 8270: '*', 8288: '', 8319: 'n', 8322: '2', 8323: '3', 8326: '6', 8327: '7', 8328: '8', 8364: 'Euro', 
  8383: 'Bitcoin', 8463: 'n', 8482: '[Trademark symbol]', 8592: '[Left Arrow]', 8593: '[Up arrow]', 
  8594: '[Right arrow]', 8595: '[Down arrow]', 8617: '[Leftwards Arrow with Hook]', 8710: '[Triangle]', 8722: '-', 
  8730: '[Square root]', 8734: '[Infinity]', 8743: '[and]', 8744: '[or]', 8804: '<=', 8964: '[Down Arrowhead]', 
  8984: '[Looped Square]', 8986: '[Watch]', 9167: '[Eject]', 9186: '[White Trapezium]', 9194: '[Fast Reverse]', 
  9200: '[Alarm Clock]', 9203: '[Hourglass Not Done]', 9208: '[Pause Button]', 
  9634: '[Square with Rounded Corners]', 9651: '[Triangle]', 9711: '[Large circle]', 9728: '*', 9730: '[Umbrella]', 
  9733: '[Star]', 9749: '[Hot Beverage]', 9752: '[Shamrock]', 9757: '[Index Pointing Up]', 9758: '[Right Pointing]', 
  9759: '[Down Pointing]', 9760: '[Skull and Crossbones]', 9774: '[Peace Symbol]', 9775: '[Yin Yang]', 
  9785: '[Frowning Face]', 9786: '[Smiling Face]', 9792: '[Female Sign]', 9794: '[Male Sign]', 9800: '[Aries]', 
  9804: '[Leo]', 9824: '[Spade]', 9827: '[Club]', 9829: '[Heart]', 9830: '[Diamond]', 9835: '[Beamed Eighth Notes]', 
  9837: '[Flat]', 9839: '[Sharp]', 9851: '[Recycling Symbol]', 9872: '[Flag]', 9879: 'Alembic', 9883: '[Atom]', 
  9888: '[Warning]', 9895: '[Transgender Symbol]', 9904: '[Coffin]', 9918: '[Baseball]', 9961: '[Shinto Shrine]', 
  9973: '[Sailboat]', 9975: '[Skier]', 9986: '[Scissors]', 9992: '[Airplane]', 9993: '[Envelope]', 
  9994: '[Raised Fist]', 9996: '[V sign]', 10014: '[Cross]', 10052: '[Snowflake]', 10084: '[Red Heart]', 
  10145: '[Right Arrow]', 11014: '[Up arrow]', 11088: '[Star]', 12356: '', 12399: '', 12484: '', 19177: '', 
  30820: '', 30825: '', 34864: '', 35685: '', 36005: '', 36064: '', 36077: '', 38913: '', 38924: '', 38945: '', 
  38948: '', 38950: '', 38959: '', 38963: '', 38964: '', 39081: '', 39200: '', 39205: '', 39264: '', 39268: '', 
  39411: '', 39791: '', 40101: '', 40105: '', 40161: '', 40162: '', 40181: '', 40229: '', 55308: '[Sparrow]', 
  55356: '', 55357: '[Astonished Face]', 55358: '[Robot]', 55622: '', 55623: '', 55639: '', 56186: '', 65038: '', 
  65039: '', 65533: '', 
};

function cleanUnicode(val: string):string {
  let ret = [];
  for (let x of val) {
      if (x.charCodeAt(0) in chars) {
          ret.push(chars[x.charCodeAt(0)]);
      } else {
          ret.push(x);
      }
  }
  return ret.join('');
}

function decodeEntities(encodedString:string):string {
  var translate_re = /&(nbsp|amp|quot|lt|gt|mdash|vert|diams|hearts|spades|clubs|bull);/g;
  var translate: {[id: string]: string; } = {
      "nbsp":" ",
      "amp": "&",
      "quot": "\"",
      "lt": "<",
      "gt": ">",
      "mdash": "-",
      "vert": "|",
      "diams": "\u2666",
      "hearts": "\u2665",
      "spades": "\u2660",
      "clubs": "\u2663",
      "bull": "*",
  };
  return encodedString.replace(translate_re, function(match, entity) {
      return translate[entity];
  }).replace(/&#([0-9]+);/gi, function(match, numStr) {
      var num = parseInt(numStr, 10);
      return String.fromCharCode(num);
  }).replace(/&x([0-9a-f]+);/gi, function(match, numStr) {
      var num = parseInt(numStr, 16);
      return String.fromCharCode(num);
  });
}

export function cleanString(val: string): string {
  return cleanUnicode(decodeEntities(val));
}

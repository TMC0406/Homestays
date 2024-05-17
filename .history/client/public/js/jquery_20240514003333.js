/*!
 * Thư viện JavaScript jQuery v3.7.1
 * https://jquery.com/
 *
 * Bản quyền OpenJS Foundation và những người đóng góp khác
 * Được phát hành theo giấy phép MIT
 * https://jquery.org/license
 *
 * Ngày: 28-08-2023T13:37Z
 */
(chức năng(toàn cầu, nhà máy) {

	"Sử dụng nghiêm ngặt";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// Dành cho các môi trường CommonJS và giống CommonJS có `window` thích hợp
		// có mặt, thực thi nhà máy và lấy jQuery.
		// Đối với môi trường không có `window` có `document`
		// (chẳng hạn như Node.js), hiển thị một nhà máy dưới dạng module.exports.
		// Điều này nhấn mạnh sự cần thiết phải tạo ra một `window` thực sự.
		// ví dụ var jQuery = require("jquery")(window);
		// Xem vé trac-14549 để biết thêm thông tin.
		module.exports = Global.document ?
			nhà máy (toàn cầu, đúng):
			hàm( w ) {
				if ( !w.document ) {
					ném Lỗi mới ("jQuery yêu cầu một cửa sổ có tài liệu");
				}
				trả lại nhà máy( w );
			};
	} khác {
		nhà máy (toàn cầu);
	}

// Truyền cái này nếu cửa sổ chưa được xác định
} )( typeof window !== "không xác định" ? window : this, function( window, noGlobal ) {

// Cạnh <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// ném ngoại lệ khi mã không nghiêm ngặt (ví dụ: ASP.NET 4.5) truy cập chế độ nghiêm ngặt
// đối số.callee.caller (trac-13335). Nhưng kể từ jQuery 3.0 (2016), chế độ nghiêm ngặt sẽ trở nên phổ biến
// đủ để tất cả những lần thử như vậy được bảo vệ trong khối thử.
"Sử dụng nghiêm ngặt";

var mảng = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? hàm( mảng ) {
	trả về arr.flat.call( mảng );
} : hàm( mảng ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call(Object);

hỗ trợ var = {};

var isFunction = function isFunction( obj ) {

		// Hỗ trợ: Chrome <=57, Firefox <=52
		// Trong một số trình duyệt, typeof trả về "hàm" cho phần tử HTML <object>
		// (tức là `typeof document.createElement( "object" ) === "function"`).
		// Chúng tôi không muốn phân loại *bất kỳ* nút DOM nào dưới dạng một hàm.
		// Hỗ trợ: QtWeb <=3.8.5, WebKit <=534.34, công cụ wkhtmltopdf <=0.12.5
		// Ngoài ra đối với WebKit cũ, typeof trả về "hàm" cho bộ sưu tập HTML
		// (ví dụ: `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		trả về typeof obj === "hàm" && typeof obj.nodeType !== "số" &&
			typeof obj.item !== "hàm";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


tài liệu var = window.document;



	var được bảo tồnScriptAttribut = {
		loại: đúng,
		src: đúng,
		nonce: đúng,
		noModule: đúng
	};

	hàm DOMEval(mã, nút, doc) {
		doc = doc || tài liệu;

		var i, val,
			script = doc.createElement("script" );

		script.text = mã;
		nếu ( nút ) {
			cho ( i trong protectedScriptAttribution ) {

				// Hỗ trợ: Firefox 64+, Edge 18+
				// Một số trình duyệt không hỗ trợ thuộc tính "nonce" trên tập lệnh.
				// Mặt khác, chỉ sử dụng `getAttribution` là chưa đủ vì
				// thuộc tính `nonce` được đặt lại thành chuỗi trống bất cứ khi nào nó
				// trở nên kết nối bối cảnh duyệt web.
				// Xem https://github.com/whatwg/html/issues/2369
				// Xem https://html.spec.whatwg.org/#nonce-attributes
				// Kiểm tra `node.getAttribution` đã được thêm vào vì mục đích
				// `jQuery.globalEval` để nó có thể giả mạo một nút không chứa
				// thông qua một đối tượng.
				val = nút [ i ] || node.getAttribution && node.getAttribution( i );
				nếu ( val ) {
					script.setAttribution( i, val );
				}
			}
		}
		doc.head.appendChild(script ).parentNode.removeChild(script );
	}


hàm toType( obj ) {
	nếu ( obj == null ) {
		trả về obj + "";
	}

	// Hỗ trợ: Chỉ Android <= 2.3 (regExp có chức năng)
	trả về typeof obj === "đối tượng" || typeof obj === "chức năng"?
		class2type[ toString.call( obj ) ] || "sự vật" :
		loại đối tượng;
}
/* Ký hiệu toàn cục */
// Việc xác định toàn cục này trong .eslintrc.json sẽ tạo ra mối nguy hiểm khi sử dụng toàn cục
// không được bảo vệ ở một nơi khác, có vẻ an toàn hơn khi chỉ định nghĩa toàn cục cho mô-đun này



phiên bản var = "3.7.1",

	rhtmlHậu tố = /HTML$/i,

	// Xác định một bản sao cục bộ của jQuery
	jQuery = hàm (bộ chọn, ngữ cảnh) {

		// Đối tượng jQuery thực chất chỉ là init constructor 'enhanced'
		// Cần init nếu jQuery được gọi (chỉ cho phép ném lỗi nếu không bao gồm)
		trả về jQuery.fn.init mới (bộ chọn, ngữ cảnh);
	};

jQuery.fn = jQuery.prototype = {

	// Phiên bản hiện tại của jQuery đang được sử dụng
	jquery: phiên bản,

	hàm tạo: jQuery,

	// Độ dài mặc định của đối tượng jQuery là 0
	chiều dài: 0,

	toArray: hàm() {
		return slice.call(this);
	},

	// Lấy phần tử thứ N trong tập phần tử phù hợp HOẶC
	// Lấy toàn bộ tập hợp phần tử phù hợp thành một mảng sạch
	lấy: hàm(num) {

		// Trả về tất cả các phần tử trong một mảng sạch
		nếu (num == null) {
			return slice.call(this);
		}

		// Chỉ trả về một phần tử từ tập hợp
		trả về số < 0? cái này[ num + this.length ] : cái này[ num ];
	},

	// Lấy một mảng các phần tử và đẩy nó vào ngăn xếp
	// (trả về tập phần tử phù hợp mới)
	pushStack: hàm( elems ) {

		// Xây dựng bộ phần tử phù hợp jQuery mới
		var ret = jQuery.merge(this.constructor(), elems );

		// Thêm đối tượng cũ vào ngăn xếp (làm tham chiếu)
		ret.prevObject = cái này;

		// Trả về tập phần tử mới được tạo
		trở lại ret;
	},

	// Thực hiện lệnh gọi lại cho mọi phần tử trong tập hợp phù hợp.
	mỗi: hàm( gọi lại ) {
		return jQuery.each(this, callback);
	},

	bản đồ: hàm (gọi lại) {
		trả về this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	lát: hàm () {
		return this.pushStack(slice.apply(this, đối số) );
	},

	đầu tiên: hàm() {
		trả về this.eq( 0 );
	},

	cuối cùng: hàm() {
		trả về this.eq( -1 );
	},

	hàm chẵn() {
		trả về this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	lẻ: hàm() {
		trả về this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i% 2;
		} ) );
	},

	eq: hàm( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	kết thúc: hàm() {
		trả lại cái này.prevObject || this.constructor();
	},

	// Chỉ sử dụng nội bộ.
	// Hoạt động giống như phương thức của Mảng, không giống phương thức jQuery.
	đẩy đẩy,
	sắp xếp: arr.sort,
	mối nối: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	tùy chọn var, tên, src, sao chép, copyIsArray, bản sao,
		mục tiêu = đối số[ 0 ] || {},
		tôi = 1,
		chiều dài = đối số.length,
		sâu = sai;

	// Xử lý tình huống sao chép sâu
	if (typeof target === "boolean" ) {
		sâu = mục tiêu;

		// Bỏ qua boolean và mục tiêu
		target = đối số[ i ] || {};
		tôi++;
	}

	// Xử lý trường hợp khi mục tiêu là một chuỗi hoặc thứ gì đó (có thể ở dạng bản sao sâu)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		mục tiêu = {};
	}

	// Mở rộng chính jQuery nếu chỉ có một đối số được truyền
	nếu ( tôi === chiều dài ) {
		mục tiêu = cái này;
		Tôi--;
	}

	cho ( ; i < chiều dài; i++ ) {

		// Chỉ xử lý các giá trị không null/không xác định
		if ( ( tùy chọn = đối số [ i ] ) != null ) {

			// Mở rộng đối tượng cơ sở
			for (tên trong tùy chọn) {
				sao chép = tùy chọn [tên];

				// Ngăn ngừa ô nhiễm Object.prototype
				// Ngăn chặn vòng lặp không bao giờ kết thúc
				if ( name === "__proto__" || target === sao chép ) {
					Tiếp tục;
				}

				// Lặp lại nếu chúng ta hợp nhất các đối tượng hoặc mảng đơn giản
				if ( sâu && sao chép && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = mục tiêu[tên];

					// Đảm bảo đúng loại cho giá trị nguồn
					if ( copyIsArray && !Array.isArray( src ) ) {
						bản sao = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						bản sao = {};
					} khác {
						bản sao = src;
					}
					copyIsArray = sai;

					// Không bao giờ di chuyển các đối tượng gốc, sao chép chúng
					target[name] = jQuery.extend(sâu, sao chép, sao chép);

				// Không mang vào các giá trị không xác định
				} khác nếu ( sao chép !== không xác định ) {
					mục tiêu [tên] = sao chép;
				}
			}
		}
	}

	// Trả về đối tượng đã sửa đổi
	trả lại mục tiêu;
};

jQuery.extend( {

	// Duy nhất cho mỗi bản sao của jQuery trên trang
	mở rộng: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Giả sử jQuery đã sẵn sàng mà không có mô-đun sẵn sàng
	isReady: đúng,

	lỗi: hàm( tin nhắn ) {
		ném Lỗi mới( tin nhắn );
	},

	noop: hàm() {},

	isPlainObject: hàm( obj ) {
		var proto, Ctor;

		// Phát hiện những tiêu cực rõ ràng
		// Sử dụng toString thay vì jQuery.type để bắt các đối tượng máy chủ
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			trả về sai;
		}

		proto = getProto( obj );

		// Các đối tượng không có nguyên mẫu (ví dụ: `Object.create( null )`) là plain
		nếu ( !proto ) {
			trả về đúng sự thật;
		}

		// Các đối tượng có nguyên mẫu rất đơn giản nếu chúng được xây dựng bởi hàm Object toàn cục
		Ctor = hasOwn.call( proto, "constructor") && proto.constructor;
		trả về typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: hàm( obj ) {
		tên var;

		for (tên trong obj) {
			trả về sai;
		}
		trả về đúng sự thật;
	},

	// Đánh giá một tập lệnh trong ngữ cảnh được cung cấp; rơi trở lại toàn cầu
	// nếu không được chỉ định.
	GlobalEval: function(code, options, doc) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	mỗi: hàm( obj, gọi lại ) {
		chiều dài var, i = 0;

		nếu ( isArrayLike( obj ) ) {
			chiều dài = obj.length;
			cho ( ; i < chiều dài; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					phá vỡ;
				}
			}
		} khác {
			cho ( tôi trong obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					phá vỡ;
				}
			}
		}

		trả lại đối tượng;
	},


	// Lấy giá trị văn bản của một mảng các nút DOM
	văn bản: hàm( elem ) {
		nút var,
			ret = "",
			tôi = 0,
			nodeType = elem.nodeType;

		nếu ( !nodeType ) {

			// Nếu không có nodeType, đây sẽ là một mảng
			while ( ( node = elem[ i++ ] ) ) {

				// Không duyệt qua các nút bình luận
				ret += jQuery.text( nút );
			}
		}
		nếu ( nodeType === 1 || nodeType === 11 ) {
			trả về elem.textContent;
		}
		nếu ( nodeType === 9 ) {
			trả về elem.documentElement.textContent;
		}
		nếu ( nodeType === 3 || nodeType === 4 ) {
			trả về elem.nodeValue;
		}

		// Không bao gồm các nút chú thích hoặc xử lý lệnh

		trở lại ret;
	},

	// kết quả chỉ dành cho sử dụng nội bộ
	makeArray: hàm( mảng, kết quả ) {
		var ret = kết quả || [];

		nếu ( Array != null ) {
			if ( isArrayLike( Object(arr ) ) ) {
				jQuery.merge(ret,
					typeof arr === "chuỗi"?
						[ arr ] : arr
				);
			} khác {
				push.call(ret, arr);
			}
		}

		trở lại ret;
	},

	inArray: hàm( elem, arr, i ) {
		trả về mảng == null? -1 : indexOf.call(arr, elem, i );
	},

	isXMLDoc: hàm( elem ) {
		var namespace = elem && elem.namespaceURI,
			docElem = elem && ( elem.ownerDocument || elem ).documentElement;

		// Giả sử HTML khi documentElement chưa tồn tại, chẳng hạn như bên trong
		// các đoạn tài liệu.
		return !rhtmlSuffix.test( không gian tên || docElem && docElem.nodeName || "HTML" );
	},

	// Hỗ trợ: Chỉ Android <=4.0, chỉ PhantomJS 1
	// push.apply(_, arraylike) chạy trên WebKit cổ
	hợp nhất: hàm (thứ nhất, thứ hai) {
		var len = +second.length,
			j = 0,
			i = first.length;

		cho ( ; j < len; j++ ) {
			thứ nhất[ i++ ] = thứ hai[ j ];
		}

		đầu tiên.length = i;

		trở về trước;
	},

	grep: function( elems, callback, invert ) {
		var gọi lạiInverse,
			trận đấu = [],
			tôi = 0,
			chiều dài = elems.length,
			callbackExpect = !invert;

		// Duyệt qua mảng, chỉ lưu các mục
		// vượt qua hàm xác thực
		cho ( ; i < chiều dài; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				match.push( elems[ i ] );
			}
		}

		trả lại các trận đấu;
	},

	// arg chỉ dành cho sử dụng nội bộ
	bản đồ: hàm( elems, gọi lại, arg ) {
		chiều dài var, giá trị,
			tôi = 0,
			ret = [];

		// Duyệt qua mảng, dịch từng mục sang giá trị mới của chúng
		if ( isArrayLike( elems ) ) {
			chiều dài = elems.length;
			cho ( ; i < chiều dài; i++ ) {
				value = callback( elems[ i ], i, arg );

				nếu ( giá trị != null ) {
					ret.push(giá trị);
				}
			}

		// Đi qua từng phím trên đối tượng,
		} khác {
			cho ( tôi trong elems ) {
				value = callback( elems[ i ], i, arg );

				nếu ( giá trị != null ) {
					ret.push(giá trị);
				}
			}
		}

		// Làm phẳng mọi mảng lồng nhau
		trả về căn hộ( ret );
	},

	// Bộ đếm GUID toàn cục cho các đối tượng
	hướng dẫn: 1,

	// jQuery.support không được sử dụng trong Core nhưng các dự án khác đính kèm
	// thuộc tính của nó nên nó cần tồn tại.
	hỗ trợ: hỗ trợ
} );

if (ký hiệu typeof === "hàm" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Điền vào bản đồ class2type
jQuery.each( "Boolean Number String Function Mảng Ngày RegExp Ký hiệu lỗi đối tượng".split( " " ),
	hàm( _i, tên ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

hàm isArrayLike( obj ) {

	// Hỗ trợ: chỉ iOS 8.2 thực (không thể tái tạo trong trình mô phỏng)
	// Kiểm tra `in` được sử dụng để ngăn ngừa lỗi JIT (gh-2145)
	// hasOwn không được sử dụng ở đây do phủ định sai
	// liên quan đến độ dài Nodelist trong IE
	var length = !!obj && "length" trong obj && obj.length,
		gõ = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		trả về sai;
	}

	kiểu trả về === "mảng" || chiều dài === 0 ||
		chiều dài typeof === "số" && chiều dài > 0 && ( chiều dài - 1 ) trong obj;
}


hàm nodeName(elem, name ) {

	trả về elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var pop = arr.pop;


var Sort = arr.sort;


var splice = arr.splice;


var khoảng trắng = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = new RegExp(
	"^" + khoảng trắng + "+|((?:^|[^\\\\])(?:\\\\.)*)" + khoảng trắng + "+$",
	"g"
);




// Lưu ý: một phần tử không chứa chính nó
jQuery.contains = function( a, b ) {
	var bup = b && b.parentNode;

	return a === bup || !!( bup && bup.nodeType === 1 && (

		// Hỗ trợ: IE 9 - 11+
		// IE không có `contains` trên SVG.
		a.chứa ?
			a.contains( bup ):
			a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
	) );
};




// Tuần tự hóa chuỗi/định danh CSS
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

hàm fcssescape( ch, asCodePoint ) {
	nếu ( asCodePoint ) {

		// U+0000 NULL trở thành KÝ TỰ THAY THẾ U+FFFD
		nếu ( ch === "\0" ) {
			trả về "\uFFFD";
		}

		// Các ký tự điều khiển và số (phụ thuộc vào vị trí) được thoát dưới dạng điểm mã
		return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
	}

	// Các ký tự ASCII có khả năng đặc biệt khác được thoát khỏi dấu gạch chéo ngược
	return "\\" + ch;
}

jQuery.escapeSelector = hàm( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};




var ưa thíchDoc = tài liệu,
	pushNative = đẩy;

( chức năng() {

tôi,
	Expr,
	ngoài cùngContext,
	sắp xếpĐầu vào,
	đã trùng lặp,
	đẩy = pushNative,

	// Các vars tài liệu cục bộ
	tài liệu,
	phần tử tài liệu,
	tài liệuIsHTML,
	rbuggyQSA,
	diêm,

	// Dữ liệu cụ thể của instance
	mở rộng = jQuery.expando,
	dirrun = 0,
	xong = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	trình biên dịchCache = createCache(),
	nonnativeSelectorCache = createCache(),
	thứ tự sắp xếp = hàm( a, b ) {
		nếu ( a === b ) {
			hasDuplicate = đúng;
		}
		trả về 0;
	},

	booleans = "đã chọn|đã chọn|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|" +
		"vòng lặp|nhiều|mở|chỉ đọc|bắt buộc|có phạm vi",

	// Biểu thức chính quy

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	định danh = "(?:\\\\[\\da-fA-F]{1,6}" + khoảng trắng +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Bộ chọn thuộc tính: https://www.w3.org/TR/selector/#attribute-selector
	thuộc tính = "\\[" + khoảng trắng + "*(" + mã định danh + ")(?:" + khoảng trắng +

		// Toán tử (chụp 2)
		"*([*^$|!~]?=)" + khoảng trắng +

		// "Giá trị thuộc tính phải là mã định danh CSS [chụp 5] hoặc chuỗi [chụp 3 hoặc chụp 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"] )*)\"|(" + mã định danh + "))|)" +
		khoảng trắng + "*\\]",

	giả = ":(" + mã định danh + ")(?:\\((" +

		// Để giảm số lượng bộ chọn cần mã thông báo trong bộ lọc trước, hãy ưu tiên các đối số:
		// 1. trích dẫn (chụp 3; chụp 4 hoặc chụp 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*) \")|"

		// 2. đơn giản (chụp 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + thuộc tính + ")*)|" +

		// 3. bất cứ điều gì khác (chụp 2)
		".*" +
		")\\)|)",

	// Khoảng trắng ở đầu và không thoát, ghi lại một số ký tự không phải khoảng trắng đứng trước ký tự sau
	rwhitespace = RegExp mới( khoảng trắng + "+", "g" ),

	rcomma = new RegExp( "^" + khoảng trắng + "*," + khoảng trắng + "*" ),
	rleadCombinator = new RegExp( "^" + khoảng trắng + "*([>+~]|" + khoảng trắng + ")" +
		khoảng trắng + "*" ),
	rdescend = RegExp mới( khoảng trắng + "|>" ),

	rpseudo = RegExp mới( pseudos ),
	ridentifier = new RegExp( "^" + định danh + "$" ),

	matchExpr = {
		ID: RegExp mới( "^#(" + mã định danh + ")" ),
		LỚP: RegExp mới( "^\\.(" + mã định danh + ")" ),
		TAG: RegExp mới( "^(" + mã định danh + "|[*])" ),
		ATTR: RegExp mới ("^" + thuộc tính),
		PSEUDO: RegExp mới( "^" + pseudos),
		TRẺ: RegExp mới(
			"^:(chỉ|đầu tiên|cuối|nth|nth-cuối)-(child|of-type)(?:\\(" +
				khoảng trắng + "*(chẵn|lẻ|(([+-]|)(\\d*)n|)" + khoảng trắng + "*(?:([+-]|)" +
				khoảng trắng + "*(\\d+)|))" + khoảng trắng + "*\\)|)", "i" ),
		bool: RegExp mới( "^(?:" + booleans + ")$", "i" ),

		// Để sử dụng trong các thư viện triển khai .is()
		// Chúng tôi sử dụng điều này để khớp POS trong `select`
		NeedContext: new RegExp( "^" + khoảng trắng +
			"*[>+~]|:(chẵn|lẻ|eq|gt|lt|nth|đầu tiên|cuối)(?:\\(" + khoảng trắng +
			"*((?:-\\d)?\\d*)" + khoảng trắng + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	// Bộ chọn ID hoặc TAG hoặc LỚP có thể phân tích cú pháp/truy xuất dễ dàng
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS thoát
	// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + khoảng trắng +
		"?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		nếu ( không phải Hex ) {

			// Loại bỏ tiền tố dấu gạch chéo ngược khỏi chuỗi thoát không phải hex
			trả về nonHex;
		}

		// Thay thế chuỗi thoát thập lục phân bằng điểm mã Unicode được mã hóa
		// Hỗ trợ: IE <=11+
		// Đối với các giá trị nằm ngoài Mặt phẳng đa ngôn ngữ cơ bản (BMP), hãy xây dựng thủ công một
		// cặp thay thế
		trở lại mức cao < 0 ?
			String.fromCharCode(cao + 0x10000):
			String.fromCharCode( cao >> 10 | 0xD800, cao & 0x3FF | 0xDC00 );
	},

	// Được sử dụng cho iframe; xem `setDocument`.
	// Hỗ trợ: IE 9 - 11+, Edge 12 - 18+
	// Xóa trình bao bọc chức năng gây ra "Quyền bị từ chối"
	// lỗi trong IE/Edge.
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		hàm( elem ) {
			return elem.disabled === true && nodeName( elem, "fieldset" );
		},
		{ dir: "parentNode", next: "legend" }
	);

// Hỗ trợ: Chỉ IE <=9
// Truy cập document.activeElement có thể ném ra ngoài dự kiến
// https://bugs.jquery.com/ticket/13393
hàm safeActiveElement() {
	thử {
		trả về document.activeElement;
	} bắt ( err ) { }
}

// Tối ưu hóa cho push.apply( _, NodeList )
thử {
	đẩy.apply(
		( arr = slice.call(Ưu tiênDoc.childNodes ) ),
		ưa thíchDoc.childNodes
	);

	// Hỗ trợ: Android <=4.0
	// Phát hiện lỗi âm thầm push.apply
	// eslint-disable-next-line không có biểu thức không sử dụng
	arr[Ưu tiênDoc.childNodes.length ].nodeType;
} bắt ( e ) {
	đẩy = {
		áp dụng: hàm( target, els ) {
			pushNative.apply( target, slice.call(els ) );
		},
		gọi: hàm (mục tiêu) {
			pushNative.apply( target, slice.call(arguments, 1 ) );
		}
	};
}

hàm find( bộ chọn, ngữ cảnh, kết quả, hạt giống) {
	var m, i, elem, nid, match,groups, newSelector,
		newContext = bối cảnh && context.ownerDocument,

		// nodeType mặc định là 9, vì ngữ cảnh mặc định là document
		nodeType = bối cảnh? bối cảnh.nodeType: 9;

	kết quả = kết quả || [];

	// Trở về sớm sau các cuộc gọi có bộ chọn hoặc ngữ cảnh không hợp lệ
	if ( bộ chọn typeof !== "chuỗi" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		trả về kết quả;
	}

	// Cố gắng thực hiện các thao tác tìm phím tắt (ngược lại với bộ lọc) trong tài liệu HTML
	nếu ( !seed ) {
		setDocument(bối cảnh);
		bối cảnh = bối cảnh || tài liệu;

		nếu ( documentIsHTML ) {

			// Nếu bộ chọn đủ đơn giản, hãy thử sử dụng phương thức DOM "get*By*"
			// (ngoại trừ bối cảnh DocumentFragment, nơi các phương thức không tồn tại)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// bộ chọn ID
				nếu ( ( m = khớp[ 1 ] ) ) {

					// Ngữ cảnh tài liệu
					nếu ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Hỗ trợ: Chỉ IE 9
							// getElementById có thể khớp các phần tử theo tên thay vì ID
							if ( elem.id === m ) {
								push.call(kết quả, elem);
								trả về kết quả;
							}
						} khác {
							trả về kết quả;
						}

					// Bối cảnh phần tử
					} khác {

						// Hỗ trợ: Chỉ IE 9
						// getElementById có thể khớp các phần tử theo tên thay vì ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							find.contains(ngữ cảnh, elem ) &&
							elem.id === m ) {

							push.call(kết quả, elem);
							trả về kết quả;
						}
					}

				// Bộ chọn kiểu
				} khác nếu ( match[ 2 ] ) {
					push.apply(kết quả, context.getElementsByTagName(selector) );
					trả về kết quả;

				// Bộ chọn lớp
				} else if ( ( m = match[ 3 ] ) && context.getElementsByClassName ) {
					push.apply(kết quả, context.getElementsByClassName( m ) );
					trả về kết quả;
				}
			}

			// Tận dụng querySelectorAll
			if ( !nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( bộ chọn ) ) ) {

				newSelector = bộ chọn;
				newContext = bối cảnh;

				// qSA xem xét các phần tử nằm ngoài phạm vi gốc khi đánh giá phần tử con hoặc
				// tổ hợp con cháu, đó không phải là điều chúng ta muốn.
				// Trong những trường hợp như vậy, chúng tôi giải quyết hành vi bằng cách thêm tiền tố vào mỗi bộ chọn trong
				// danh sách có bộ chọn ID tham chiếu ngữ cảnh phạm vi.
				// Kỹ thuật này cũng phải được sử dụng khi sử dụng bộ kết hợp hàng đầu
				// vì các bộ chọn như vậy không được querySelectorAll nhận dạng.
				// Cảm ơn Andrew Dupont về kỹ thuật này.
				nếu (nodeType === 1 &&
					( rdescend.test( selector ) || rleadCombinator.test( selector ) ) ) {

					// Mở rộng ngữ cảnh cho bộ chọn anh chị em
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						bối cảnh;

					// Chúng ta có thể sử dụng :scope thay vì hack ID nếu trình duyệt
					// hỗ trợ nó & nếu chúng ta không thay đổi ngữ cảnh.
					// Hỗ trợ: IE 11+, Edge 17 - 18+
					// IE/Edge đôi khi đưa ra lỗi "Quyền bị từ chối" khi
					// so sánh chặt chẽ hai tài liệu; sự so sánh nông cạn có tác dụng.
					// eslint-disable-next-line eqeqeq
					if ( newContext != bối cảnh || !support.scope ) {

						// Chụp ID ngữ cảnh, đặt nó trước nếu cần
						if ( ( nid = context.getAttribution( "id" ) ) ) {
							nid = jQuery.escapeSelector( nid );
						} khác {
							context.setAttribution ("id", ( nid = mở rộng ));
						}
					}

					// Tiền tố mỗi bộ chọn trong danh sách
					nhóm = tokenize( bộ chọn);
					i = nhóm.length;
					trong khi tôi-- ) {
						nhóm[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector(nhóm[i] );
					}
					newSelector =group.join( "," );
				}

				thử {
					push.apply(kết quả,
						newContext.querySelectorAll( newSelector )
					);
					trả về kết quả;
				} bắt ( qsaError ) {
					nonnativeSelectorCache(selector, true);
				} Cuối cùng {
					if ( nid === mở rộng ) {
						bối cảnh.removeAttribution ("id");
					}
				}
			}
		}
	}

	// Tất cả những người khác
	return select( selector.replace( rtrimCSS, "$1" ), bối cảnh, kết quả, hạt giống );
}

/**
 * Tạo bộ đệm khóa-giá trị có kích thước giới hạn
 * @returns {function(string, object)} Trả về dữ liệu Đối tượng sau khi tự lưu trữ nó bằng
 * tên thuộc tính chuỗi (có hậu tố dấu cách) và (nếu bộ đệm lớn hơn Expr.cacheLength)
 * xóa mục cũ nhất
 */
hàm createCache() {
	phím var = [];

	chức năng bộ đệm (khóa, giá trị) {

		// Sử dụng (key + " ") để tránh xung đột với các thuộc tính nguyên mẫu gốc
		// (xem https://github.com/jquery/sizzle/issues/157)
		if ( key.push( key + " " ) > Expr.cacheLength ) {

			// Chỉ giữ các mục gần đây nhất
			xóa bộ đệm [keys.shift()];
		}
		trả về ( bộ đệm [ key + " " ] = giá trị );
	}
	trả lại bộ đệm;
}

/**
 * Đánh dấu một chức năng để sử dụng đặc biệt bởi mô-đun bộ chọn jQuery
 * @param {Function} fn Hàm đánh dấu
 */
hàm markFunction( fn ) {
	fn[mở rộng] = đúng;
	trả lại fn;
}

/**
 * Hỗ trợ kiểm tra bằng cách sử dụng một phần tử
 * @param {Function} fn Đã chuyển phần tử đã tạo và trả về kết quả boolean
 */
hàm khẳng định( fn ) {
	var el = document.createElement( "fieldset" );

	thử {
		trở lại !!fn( el );
	} bắt ( e ) {
		trả về sai;
	} Cuối cùng {

		// Mặc định xóa khỏi cha mẹ của nó
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// giải phóng bộ nhớ trong IE
		el = null;
	}
}

/**
 * Trả về một hàm để sử dụng trong các giả cho các kiểu đầu vào
 * @param {String} loại
 */
hàm createInputPseudo(type) {
	hàm trả về( elem ) {
		trả về nodeName( elem, "input") && elem.type === type;
	};
}

/**
 * Trả về một hàm để sử dụng trong dạng giả cho các nút
 * @param {String} loại
 */
hàm createButtonPseudo(type) {
	hàm trả về( elem ) {
		trả về ( nodeName( elem, "input" ) || nodeName( elem, "button" ) ) &&
			elem.type === loại;
	};
}

/**
 * Trả về một hàm để sử dụng trong các giả cho :enabled/:disabled
 * @param {Boolean} bị vô hiệu hóa đúng với :disabled; sai cho: đã bật
 */
hàm createDisabledPseudo( bị vô hiệu hóa ) {

	// Đã biết :disabled false false: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	hàm trả về( elem ) {

		// Chỉ một số phần tử nhất định có thể khớp với :enabled hoặc :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ("biểu mẫu" trong elem) {

			// Kiểm tra khuyết tật kế thừa trên các phần tử không bị khuyết tật có liên quan:
			// * liệt kê các phần tử liên quan đến biểu mẫu trong một tập trường bị vô hiệu hóa
			// https://html.spec.whatwg.org/multipage/forms.html#category-list
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * phần tử tùy chọn trong nhóm optgroup bị vô hiệu hóa
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// Tất cả các phần tử như vậy đều có thuộc tính "form".
			if ( elem.parentNode && elem.disabled === false ) {

				// Các phần tử tùy chọn sẽ chuyển sang nhóm optgroup gốc nếu có
				if ("nhãn" trong elem) {
					if ("nhãn" trong elem.parentNode ) {
						trả về elem.parentNode.disabled === bị vô hiệu hóa;
					} khác {
						trả về elem.disabled === bị vô hiệu hóa;
					}
				}

				// Hỗ trợ: IE 6 - 11+
				// Sử dụng thuộc tính phím tắt isDisabled để kiểm tra tổ tiên của fieldset bị vô hiệu hóa
				trả về elem.isDisabled === bị vô hiệu hóa ||

					// Trường hợp không có isDisabled, hãy kiểm tra thủ công
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === bị vô hiệu hóa;
			}

			trả về elem.disabled === bị vô hiệu hóa;

		// Cố gắng sàng lọc các phần tử không thể vô hiệu hóa trước khi tin cậy thuộc tính vô hiệu hóa.
		// Một số nạn nhân bị mắc vào mạng của chúng tôi (nhãn, chú giải, menu, bản nhạc), nhưng điều đó không nên
		// thậm chí còn tồn tại trên chúng chứ đừng nói đến việc có giá trị boolean.
		} else if ("nhãn" trong elem ) {
			trả về elem.disabled === bị vô hiệu hóa;
		}

		// Các phần tử còn lại không phải là :enabled hay :disabled
		trả về sai;
	};
}

/**
 * Trả về một hàm để sử dụng trong các giả cho các vị trí
 * @param {Chức năng} fn
 */
hàm createPositionalPseudo( fn ) {
	trả về markFunction(hàm(đối số) {
		đối số = + đối số;
		trả về markFunction(function(seed,match) {
			var j,
				matchIndexes = fn( [],seed.length,argument ),
				i = matchIndexes.length;

			// Khớp các phần tử được tìm thấy tại các chỉ mục đã chỉ định
			trong khi tôi-- ) {
				if ( hạt giống [ ( j = matchIndexes [ i ] ) ] ) {
					hạt giống[ j ] = !( khớp với [ j ] = hạt giống [ j ] );
				}
			}
		} );
	} );
}

/**
 * Kiểm tra tính hợp lệ của một nút dưới dạng bối cảnh bộ chọn jQuery
 * bối cảnh @param {Element|Object=}
 * @returns {Element|Object|Boolean} Nút đầu vào nếu được chấp nhận, nếu không thì là giá trị giả
 */
hàm testContext(bối cảnh) {
	trả về bối cảnh && typeof context.getElementsByTagName !== "không xác định" && bối cảnh;
}

/**
 * Đặt các biến liên quan đến tài liệu một lần dựa trên tài liệu hiện tại
 * @param {Element|Object} [nút] Một phần tử hoặc đối tượng tài liệu sẽ sử dụng để thiết lập tài liệu
 * @returns {Object} Trả về tài liệu hiện tại
 */
hàm setDocument( nút ) {
	var subWindow,
		doc = nút? node.ownerTài liệu || nút: ưa thíchDoc;

	// Quay lại sớm nếu tài liệu không hợp lệ hoặc đã được chọn
	// Hỗ trợ: IE 11+, Edge 17 - 18+
	// IE/Edge đôi khi đưa ra lỗi "Quyền bị từ chối" khi so sánh nghiêm ngặt
	// hai tài liệu; sự so sánh nông cạn có tác dụng.
	// eslint-disable-next-line eqeqeq
	if ( doc == tài liệu || doc.nodeType !== 9 || !doc.documentElement ) {
		trả lại tài liệu;
	}

	// Cập nhật các biến toàn cục
	tài liệu = tài liệu;
	documentElement = document.documentElement;
	documentIsHTML = !jQuery.isXMLDoc( tài liệu);

	// Hỗ trợ: Chỉ iOS 7, IE 9 - 11+
	// Các trình duyệt cũ hơn không hỗ trợ `match` không có tiền tố.
	trận đấu = documentElement.matches ||
		documentElement.webkitMatchesSelector ||
		documentElement.msMatchesSelector;

	// Hỗ trợ: IE 9 - 11+, Edge 12 - 18+
	// Truy cập tài liệu iframe sau khi dỡ tải sẽ gây ra lỗi "quyền bị từ chối"
	// (xem trac-13936).
	// Giới hạn bản sửa lỗi ở IE & Edge Legacy; mặc dù Edge 15+ đang triển khai `match`,
	// tất cả các phiên bản IE 9+ và Edge Legacy đều triển khai `msMatchesSelector`.
	if ( documentElement.msMatchesSelector &&

		// Hỗ trợ: IE 11+, Edge 17 - 18+
		// IE/Edge đôi khi đưa ra lỗi "Quyền bị từ chối" khi so sánh nghiêm ngặt
		// hai tài liệu; sự so sánh nông cạn có tác dụng.
		// eslint-disable-next-line eqeqeq
		ưa thíchDoc != tài liệu &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Hỗ trợ: IE 9 - 11+, Edge 12 - 18+
		subWindow.addEventListener ("dỡ tải", unloadHandler);
	}

	// Hỗ trợ: TỨC LÀ <10
	// Kiểm tra xem getElementById có trả về các phần tử theo tên không
	// Các phương thức getElementById bị hỏng không nhận được các tên được đặt theo chương trình,
	// vì vậy hãy sử dụng bài kiểm tra vòng xoay getElementsByName
	support.getById = khẳng định( function( el ) {
		documentElement.appendChild( el ).id = jQuery.expando;
		trả lại !document.getElementsByName ||
			!document.getElementsByName( jQuery.expando ).length;
	} );

	// Hỗ trợ: Chỉ IE 9
	// Kiểm tra xem có thể thực hiện MatchSelector không
	// trên một nút bị ngắt kết nối.
	support.disconnectedMatch = khẳng định( function( el ) {
		returnmatch.call(el, "*" );
	} );

	// Hỗ trợ: IE 9 - 11+, Edge 12 - 18+
	// IE/Edge không hỗ trợ lớp giả :scope.
	support.scope = khẳng định( function() {
		return document.querySelectorAll( ":scope" );
	} );

	// Hỗ trợ: chỉ Chrome 105 - 111, chỉ Safari 15.4 - 16.3
	// Đảm bảo rằng đối số `:has()` được phân tích cú pháp một cách nghiêm túc.
	// Chúng tôi đưa `*` vào thử nghiệm để phát hiện các triển khai có lỗi
	// _có chọn lọc_ tha thứ (cụ thể khi danh sách bao gồm ít nhất
	// một bộ chọn hợp lệ).
	// Lưu ý rằng chúng ta xử lý việc thiếu hỗ trợ hoàn toàn cho `:has()` như thể nó là
	// hỗ trợ tuân thủ thông số kỹ thuật, điều này tốt vì sử dụng `:has()` trong đó
	// các môi trường sẽ thất bại trong đường dẫn qSA và quay lại truyền tải jQuery
	// Dẫu sao thì.
	support.cssHas = khẳng định( function() {
		thử {
			document.querySelector( ":has(*,:jqfake)" );
			trả về sai;
		} bắt ( e ) {
			trả về đúng sự thật;
		}
	} );

	// Lọc ID và tìm
	nếu ( support.getById ) {
		Expr.filter.ID = hàm( id ) {
			var attrId = id.replace( runescape, funescape );
			hàm trả về( elem ) {
				return elem.getAttribution( "id" ) === attrId;
			};
		};
		Expr.find.ID = function(id, context) {
			if ( typeof context.getElementById !== "không xác định" && documentIsHTML ) {
				var elem = context.getElementById( id );
				trả lại phần tử? [ yếu tố ] : [];
			}
		};
	} khác {
		Expr.filter.ID = hàm( id ) {
			var attrId = id.replace( runescape, funescape );
			hàm trả về( elem ) {
				nút var = typeof elem.getAttributionNode !== "không xác định" &&
					elem.getAttributionNode ("id");
				nút trả về && node.value === attrId;
			};
		};

		// Hỗ trợ: Chỉ IE 6 - 7
		// getElementById không đáng tin cậy như một phím tắt tìm kiếm
		Expr.find.ID = function(id, context) {
			if ( typeof context.getElementById !== "không xác định" && documentIsHTML ) {
				nút var, tôi, elems,
					elem = bối cảnh.getElementById( id );

				nếu ( elem ) {

					// Xác minh thuộc tính id
					nút = elem.getAttributionNode ("id");
					if ( nút && node.value === id ) {
						return [ elem ];
					}

					// Quay lại getElementsByName
					elems = context.getElementsByName( id );
					tôi = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						nút = elem.getAttributionNode ("id");
						if ( nút && node.value === id ) {
							return [ elem ];
						}
					}
				}

				trở lại [];
			}
		};
	}

	// Nhãn
	Expr.find.TAG = hàm(thẻ, ngữ cảnh) {
		if ( typeof context.getElementsByTagName !== "không xác định" ) {
			trả về bối cảnh.getElementsByTagName(tag);

		// Các nút DocumentFragment không có gEBTN
		} khác {
			trả về bối cảnh.querySelectorAll(tag);
		}
	};

	// Lớp học
	Expr.find.CLASS = function(className, context) {
		if ( typeof context.getElementsByClassName !== "không xác định" && documentIsHTML ) {
			trả về bối cảnh.getElementsByClassName(className);
		}
	};

	/* QSA/matchSelector
	-------------------------------------------------- -------------------- */

	// Hỗ trợ QSA và MatchSelector

	rbuggyQSA = [];

	// Xây dựng biểu thức chính quy QSA
	// Chiến lược Regex được áp dụng từ Diego Perini
	khẳng định( hàm( el ) {

		đầu vào var;

		documentElement.appendChild( el ).innerHTML =
			"<a id='" + mở rộng + "' href='' bị vô hiệu hóa='disabled'></a>" +
			"<select id='" + mở rộng + "-\r\\' bị vô hiệu hóa='bị vô hiệu hóa'>" +
			"<option selected=''></option></select>";

		// Hỗ trợ: Chỉ iOS <=7 - 8
		// Thuộc tính Boolean và "giá trị" không được xử lý chính xác trong một số tài liệu XML
		if ( !el.querySelectorAll( "[đã chọn]" ).length ) {
			rbuggyQSA.push( "\\[" + khoảng trắng + "*(?:value|" + booleans + ")" );
		}

		// Hỗ trợ: Chỉ iOS <=7 - 8
		if ( !el.querySelectorAll( "[id~=" + Expando + "-]" ).length ) {
			rbuggyQSA.push( "~=" );
		}

		// Hỗ trợ: chỉ iOS 8
		// https://bugs.webkit.org/show_bug.cgi?id=136851
		// `selector#id bộ chọn kết hợp anh chị em` trong trang không thành công
		if ( !el.querySelectorAll( "a#" + Expando + "+*" ).length ) {
			rbuggyQSA.push( ".#.+[+~]" );
		}

		// Hỗ trợ: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// Trong một số loại tài liệu, các bộ chọn này không hoạt động nguyên bản.
		// Điều này có thể ổn nhưng để tương thích ngược, chúng tôi muốn duy trì
		// xử lý chúng thông qua việc truyền tải jQuery trong jQuery 3.x.
		if ( !el.querySelectorAll( ":checked" ).length ) {
			rbuggyQSA.push( ":checked" );
		}

		// Hỗ trợ: Ứng dụng gốc Windows 8
		// Thuộc tính type và name bị hạn chế trong quá trình gán .innerHTML
		input = document.createElement("input" );
		input.setAttribution ("loại", "ẩn");
		el.appendChild( input ).setAttribution( "name", "D" );

		// Hỗ trợ: IE 9 - 11+
		// Bộ chọn :disabled của IE không chọn các phần tử con của các tập trường bị vô hiệu hóa
		// Hỗ trợ: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// Trong một số loại tài liệu, các bộ chọn này không hoạt động nguyên bản.
		// Điều này có thể ổn nhưng để tương thích ngược, chúng tôi muốn duy trì
		// xử lý chúng thông qua việc truyền tải jQuery trong jQuery 3.x.
		documentElement.appendChild(el ).disabled = true;
		if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
			rbuggyQSA.push( ":enabled", ":disabled" );
		}

		// Hỗ trợ: IE 11+, Edge 15 - 18+
		// IE 11/Edge không tìm thấy các phần tử trên truy vấn `[name='']` trong một số trường hợp.
		// Thêm thuộc tính tạm thời vào tài liệu trước khi phép chọn hoạt động
		// xung quanh vấn đề.
		// Điều thú vị là IE 10 trở lên dường như không gặp sự cố.
		input = document.createElement("input" );
		input.setAttribution ("tên", "");
		el.appendChild(đầu vào);
		if ( !el.querySelectorAll( "[name='']" ).length ) {
			rbuggyQSA.push( "\\[" + khoảng trắng + "*name" + khoảng trắng + "*=" +
				khoảng trắng + "*(?:''|\"\")" );
		}
	} );

	if ( !support.cssHas ) {

		// Hỗ trợ: Chrome 105 - 110+, Safari 15.4 - 16.3+
		// Cơ chế `try-catch` thông thường của chúng tôi không phát hiện được các phần tử không được hỗ trợ
		// các lớp giả bên trong `:has()` (chẳng hạn như `:has(:contains("Foo"))`)
		// trong các trình duyệt phân tích đối số `:has()` như một danh sách bộ chọn có thể tha thứ.
		// https://drafts.csswg.org/selectors/#relational hiện yêu cầu đối số
		// được phân tích cú pháp không thể tha thứ, nhưng trình duyệt vẫn chưa được điều chỉnh hoàn toàn.
		rbuggyQSA.push( ":has" );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );

	/* Sắp xếp
	-------------------------------------------------- -------------------- */

	// Sắp xếp thứ tự tài liệu
	thứ tự sắp xếp = hàm( a, b ) {

		// Gắn cờ để loại bỏ trùng lặp
		nếu ( a === b ) {
			hasDuplicate = đúng;
			trả về 0;
		}

		// Sắp xếp sự tồn tại của phương thức nếu chỉ có một đầu vào có CompareDocumentPosition
		var so sánh = !a.compareDocumentPosition - !b.compareDocumentPosition;
		nếu ( so sánh ) {
			trở lại so sánh;
		}

		// Tính vị trí nếu cả hai đầu vào đều thuộc cùng một tài liệu
		// Hỗ trợ: IE 11+, Edge 17 - 18+
		// IE/Edge đôi khi đưa ra lỗi "Quyền bị từ chối" khi so sánh nghiêm ngặt
		// hai tài liệu; sự so sánh nông cạn có tác dụng.
		// eslint-disable-next-line eqeqeq
		so sánh = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ):

			// Ngược lại chúng ta biết chúng đã bị ngắt kết nối
			1;

		// Các nút bị ngắt kết nối
		nếu ( so sánh & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === so sánh ) ) {

			// Chọn phần tử đầu tiên có liên quan đến tài liệu ưa thích của chúng tôi
			// Hỗ trợ: IE 11+, Edge 17 - 18+
			// IE/Edge đôi khi đưa ra lỗi "Quyền bị từ chối" khi so sánh nghiêm ngặt
			// hai tài liệu; sự so sánh nông cạn có tác dụng.
			// eslint-disable-next-line eqeqeq
			if ( a === tài liệu || a.ownerDocument == ưa thíchDoc &&
				find.contains(Ưu tiênDoc, a ) ) {
				trả về -1;
			}

			// Hỗ trợ: IE 11+, Edge 17 - 18+
			// IE/Edge đôi khi đưa ra lỗi "Quyền bị từ chối" khi so sánh nghiêm ngặt
			// hai tài liệu; sự so sánh nông cạn có tác dụng.
			// eslint-disable-next-line eqeqeq
			if ( b === tài liệu || b.ownerDocument == ưa thíchDoc &&
				find.contains(Ưu tiênDoc, b ) ) {
				trả lại 1;
			}

			// Duy trì thứ tự ban đầu
			trả về sắp xếpĐầu vào?
				( indexOf.call(sortInput, a ) - indexOf.call(sortInput, b ) ) :
				0;
		}

		trả lại so sánh & 4? -1 : 1;
	};

	trả lại tài liệu;
}

find.matches = function(expr, Elements) {
	return find(expr, null, null, các phần tử);
};

find.matchesSelector = function( elem, expr ) {
	setDocument(elem);

	nếu ( documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

		thử {
			var ret =match.call( elem, expr );

			// MatchSelector của IE 9 trả về sai trên các nút bị ngắt kết nối
			if ( ret || support.disconnectedMatch ||

					// Đồng thời, các nút bị ngắt kết nối được cho là nằm trong một tài liệu
					// đoạn trong IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				trở lại ret;
			}
		} bắt ( e ) {
			nonnativeSelectorCache(expr, true);
		}
	}

	return find(expr, document, null, [ elem ] ).length > 0;
};

find.contains = function(bối cảnh, elem) {

	// Đặt vars tài liệu nếu cần
	// Hỗ trợ: IE 11+, Edge 17 - 18+
	// IE/Edge đôi khi đưa ra lỗi "Quyền bị từ chối" khi so sánh nghiêm ngặt
	// hai tài liệu; sự so sánh nông cạn có tác dụng.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument(bối cảnh);
	}
	return jQuery.contains(bối cảnh, elem);
};


find.attr = function( elem, name ) {

	// Đặt vars tài liệu nếu cần
	// Hỗ trợ: IE 11+, Edge 17 - 18+
	// IE/Edge đôi khi đưa ra lỗi "Quyền bị từ chối" khi so sánh nghiêm ngặt
	// hai tài liệu; sự so sánh nông cạn có tác dụng.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument(elem);
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Đừng để bị đánh lừa bởi thuộc tính Object.prototype (xem trac-13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, tên, !documentIsHTML ):
			không xác định;

	if ( val !== không xác định ) {
		trả lại giá trị;
	}

	trả về elem.getAttribution (tên);
};

find.error = hàm( tin nhắn ) {
	ném Lỗi mới( "Lỗi cú pháp, biểu thức không được nhận dạng: " + msg );
};

/**
 * Sắp xếp tài liệu và loại bỏ trùng lặp
 * Kết quả @param {ArrayLike}
 */
jQuery.uniqueSort = hàm(kết quả) {
	yếu tố khác,
		trùng lặp = [],
		j = 0,
		tôi = 0;

	// Trừ khi chúng tôi *biết* chúng tôi có thể phát hiện các bản sao, giả sử sự hiện diện của chúng
	//
	// Hỗ trợ: Android <=4.0+
	// Việc kiểm tra để phát hiện các bản sao là không thể đoán trước được nên thay vào đó hãy giả sử là chúng ta không thể
	// phụ thuộc vào việc phát hiện sự trùng lặp trong tất cả các trình duyệt mà không có sự sắp xếp ổn định.
	hasDuplicate = !support.sortStable;
	SortInput = !support.sortStable && slice.call( results, 0 );
	Sort.call(kết quả,sortOrder);

	nếu ( hasDuplicate ) {
		while ( ( elem = kết quả[ i++ ] ) ) {
			if ( elem === kết quả[ i ] ) {
				j = trùng lặp.push( i );
			}
		}
		trong khi ( j-- ) {
			splice.call(kết quả, trùng lặp[ j ], 1 );
		}
	}

	// Xóa đầu vào sau khi sắp xếp để giải phóng đối tượng
	// Xem https://github.com/jquery/sizzle/pull/225
	sắp xếpInput = null;

	trả về kết quả;
};

jQuery.fn.uniqueSort = function() {
	return this.pushStack( jQuery.uniqueSort( slice.apply( this ) ) );
};

Expr = jQuery.expr = {

	// Người dùng có thể điều chỉnh
	chiều dài bộ đệm: 50,

	tạoPseudo: markFunction,

	trận đấu: matchExpr,

	attrHandle: {},

	tìm thấy: {},

	liên quan đến: {
		">": { dir: "parentNode", đầu tiên: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	bộ lọc trước: {
		ATTR: hàm(khớp) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Di chuyển giá trị đã cho để khớp với [3] dù được trích dẫn hay không trích dẫn
			trận đấu[ 3 ] = ( trận đấu[ 3 ] || trận đấu[ 4 ] || trận đấu[ 5 ] || "" )
				.replace( runescape, funescape );

			nếu ( khớp [ 2 ] === "~=" ) {
				trận đấu [ 3 ] = " " + trận đấu [ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		TRẺ: hàm( khớp ) {

			/* kết quả khớp từ matchExpr["CHILD"]
				1 loại (chỉ|thứ n|...)
				2 cái gì (con|loại)
				3 đối số (chẵn|lẻ|\d*|\d*n([+-]\d+)?|...)
				4 thành phần xn của đối số xn+y ([+-]?\d*n|)
				5 dấu của thành phần xn
				6 x thành phần xn
				7 dấu của thành phần y
				8 y của thành phần y
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* yêu cầu đối số
				nếu ( !match[ 3 ] ) {
					find.error(match[ 0 ] );
				}

				// tham số x và y dạng số cho Expr.filter.CHILD
				// hãy nhớ rằng ép kiểu sai/đúng tương ứng là 0/1
				khớp [ 4 ] = +( khớp [ 4 ] ?
					trận đấu[ 5 ] + ( trận đấu[ 6 ] || 1 ):
					2 * ( khớp[ 3 ] === "chẵn" || khớp[ 3 ] === "lẻ" )
				);
				trận đấu[ 5 ] = +( ( trận đấu [ 7 ] + trận đấu [ 8 ] ) || trận đấu [ 3 ] === "lẻ");

			// các loại khác cấm đối số
			} khác nếu ( match[ 3 ] ) {
				find.error(match[ 0 ] );
			}

			trận đấu trở lại;
		},

		PSEUDO: hàm(match ) {
			var dư thừa,
				không trích dẫn = !match[ 6 ] && match[ 2 ];

			if ( matchExpr.CHILD.test(match[ 0 ] ) ) {
				trả về giá trị rỗng;
			}

			// Chấp nhận các đối số được trích dẫn như hiện tại
			nếu ( khớp[ 3 ] ) {
				trận đấu[ 2 ] = trận đấu[ 4 ] || trận đấu[ 5 ] || "";

			// Loại bỏ các ký tự thừa khỏi các đối số không được trích dẫn
			} else if ( không trích dẫn && rpseudo.test( không trích dẫn ) &&

				// Nhận phần dư từ tokenize (đệ quy)
				( thừa = tokenize( không trích dẫn, đúng ) ) &&

				// tiến tới dấu ngoặc đơn đóng tiếp theo
				( thừa = unquoted.indexOf( ")", unquoted.length - thừa ) - unquoted.length ) ) {

				// vượt quá là một chỉ số âm
				match[ 0 ] = match[ 0 ].slice( 0, thừa );
				match[ 2 ] = unquoted.slice( 0, thừa );
			}

			// Chỉ trả về các ảnh chụp cần thiết bằng phương thức lọc giả (loại và đối số)
			trả về match.slice( 0, 3 );
		}
	},

	lọc: {

		TAG: hàm( nodeNameSelector ) {
			var ExpectNodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			trả về nodeNameSelector === "*"?
				chức năng() {
					trả về đúng sự thật;
				} :
				hàm( elem ) {
					trả về nodeName(elem, ExpectNodeName );
				};
		},

		LỚP: hàm(className) {
			mẫu var = classCache[ className + " " ];

			mẫu trả về ||
				( mẫu = new RegExp( "(^|" + khoảng trắng + ")" + className +
					"(" + khoảng trắng + "|$)" ) ) &&
				classCache(className, function(elem) {
					mẫu trả về.test(
						typeof elem.className === "chuỗi" && elem.className ||
							typeof elem.getAttribution !== "không xác định" &&
								elem.getAttribution( "class" ) ||
							""
					);
				} );
		},

		ATTR: hàm(tên, toán tử, kiểm tra) {
			hàm trả về( elem ) {
				var result = find.attr( elem, name );

				nếu ( kết quả == null ) {
					toán tử trả về === "!=";
				}
				nếu ( !operator ) {
					trả về đúng sự thật;
				}

				kết quả += "";

				nếu ( toán tử === "=" ) {
					trả về kết quả === kiểm tra;
				}
				if ( toán tử === "!=" ) {
					trả về kết quả !== kiểm tra;
				}
				nếu ( toán tử === "^=" ) {
					kiểm tra trả lại && result.indexOf( check ) === 0;
				}
				nếu ( toán tử === "*=" ) {
					kiểm tra trả lại && result.indexOf( check ) > -1;
				}
				nếu ( toán tử === "$=" ) {
					return check && result.slice( -check.length ) === check;
				}
				nếu ( toán tử === "~=" ) {
					return ( " " + result.replace( rwhitespace, " " ) + " " )
						.indexOf(kiểm tra) > -1;
				}
				nếu ( toán tử === "|=" ) {
					kết quả trả về === kiểm tra || result.slice( 0, check.length + 1 ) === check + "-";
				}

				trả về sai;
			};
		},

		TRẺ: hàm(loại, cái gì, _argument, đầu tiên, cuối cùng ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				Forward = type.slice( -4 ) !== "cuối cùng",
				ofType = cái gì === "thuộc loại";

			trả về đầu tiên === 1 && cuối cùng === 0 ?

				// Phím tắt cho :nth-*(n)
				hàm( elem ) {
					return !!elem.parentNode;
				} :

				hàm(elem, _context, xml) {
					bộ đệm var, bộ đệm ngoài, nút, nút Index, bắt đầu,
						dir = đơn giản !== chuyển tiếp ? "nextSibling" : "previousSibling",
						cha mẹ = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						khác biệt = sai;

					nếu ( cha mẹ ) {

						// :(đầu tiên|cuối|chỉ)-(child|of-type)
						nếu ( đơn giản ) {
							trong khi ( thư mục ) {
								nút = elem;
								trong khi ( ( nút = nút [ dir ] ) ) {
									nếu (ofType ?
										nodeName(nút, tên):
										node.nodeType === 1 ) {

										trả về sai;
									}
								}

								// Đảo ngược hướng cho :only-* (nếu chúng ta chưa làm như vậy)
								start = dir = type === "chỉ" && !start && "nextSibling";
							}
							trả về đúng sự thật;
						}

						bắt đầu = [ tiến lên? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) lưu trữ dữ liệu bộ đệm trên `parent`
						if ( chuyển tiếp && useCache ) {

							// Tìm `elem` từ chỉ mục đã được lưu trong bộ nhớ đệm trước đó
							bên ngoàiCache = cha mẹ[ mở rộng ] || ( cha mẹ[ mở rộng ] = {} );
							bộ nhớ cache = bộ nhớ ngoàiCache[loại] || [];
							nodeIndex = cache[ 0 ] === dirrun && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							nút = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Dự phòng việc tìm kiếm `elem` ngay từ đầu
								( khác = nodeIndex = 0 ) || start.pop() ) ) {

								// Khi tìm thấy, cache lập chỉ mục trên `parent` và ngắt
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									bên ngoàiCache [loại] = [ dirrun, nodeIndex, diff ];
									phá vỡ;
								}
							}

						} khác {

							// Sử dụng chỉ mục phần tử đã được lưu trong bộ nhớ đệm trước đó nếu có
							nếu ( useCache ) {
								bên ngoàiCache = elem[ mở rộng ] || ( elem[ mở rộng ] = {} );
								bộ nhớ cache = bộ nhớ ngoàiCache[loại] || [];
								nodeIndex = cache[ 0 ] === dirrun && cache[ 1 ];
								khác = nút Index;
							}

							// xml :nth-child(...)
							// hoặc :nth-last-child(...) hoặc :nth(-last)?-of-type(...)
							nếu (khác === sai) {

								// Sử dụng vòng lặp tương tự như trên để tìm `elem` ngay từ đầu
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( khác = nodeIndex = 0 ) || start.pop() ) ) {

									nếu (( ofType ?
										nodeName(nút, tên):
										node.nodeType === 1 ) &&
										++khác ) {

										// Cache chỉ mục của từng phần tử gặp phải
										nếu ( useCache ) {
											externalCache = nút[expando] ||
												( nút[ mở rộng ] = {} );
											externalCache[type] = [dirruns, diff];
										}

										if ( nút === elem ) {
											phá vỡ;
										}
									}
								}
							}
						}

						// Kết hợp phần bù, sau đó kiểm tra kích thước chu kỳ
						khác biệt -= cuối cùng;
						trả về khác biệt === đầu tiên || ( khác % đầu tiên === 0 && diff / đầu tiên >= 0 );
					}
				};
		},

		PSEUDO: hàm( giả, đối số ) {

			// tên lớp giả không phân biệt chữ hoa chữ thường
			// https://www.w3.org/TR/selector/#pseudo-classes
			// Ưu tiên theo phân biệt chữ hoa chữ thường trong trường hợp các bút danh tùy chỉnh được thêm bằng chữ in hoa
			// Hãy nhớ rằng setFilters kế thừa từ pseudos
			var args,
				fn = Expr.pseudos[ giả ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					find.error( "giả không được hỗ trợ: " + pseudo );

			// Người dùng có thể sử dụng createPseudo để chỉ ra rằng
			// các đối số cần thiết để tạo hàm lọc
			// giống như jQuery làm
			nếu ( fn[ mở rộng ] ) {
				trả về fn(đối số);
			}

			// Nhưng vẫn duy trì hỗ trợ cho chữ ký cũ
			if ( fn.length > 1 ) {
				args = [ giả, giả, "", đối số];
				trả về Expr.setFilters.hasOwnProperty( pseudo.toLowerCase())?
					markFunction(function(seed,match) {
						var idx,
							khớp = fn( hạt giống, đối số ),
							i = khớp.length;
						trong khi tôi-- ) {
							idx = indexOf.call( hạt giống, khớp [ i ] );
							hạt giống [ idx ] = !( khớp [ idx ] = khớp [ i ] );
						}
					} ):
					hàm( elem ) {
						return fn(elem, 0, args);
					};
			}

			trả lại fn;
		}
	},

	giả: {

		// Các giả có khả năng phức tạp
		không phải: markFunction(function(selector) {

			// Cắt bộ chọn được truyền để biên dịch
			// để tránh xử lý ở đầu và cuối
			// dấu cách làm tổ hợp
			đầu vào var = [],
				kết quả = [],
				matcher = biên dịch( selector.replace( rtrimCSS, "$1" ) );

			công cụ đối sánh trả về[mở rộng]?
				markFunction(function(seed,match, _context, xml ) {
					yếu tố khác,
						chưa từng có = matcher(seed, null, xml, [] ),
						i = hạt giống.chiều dài;

					// So khớp các phần tử không khớp với `matcher`
					trong khi tôi-- ) {
						if ( ( elem = chưa từng có[ i ] ) ) {
							hạt giống [ i ] = !( trận đấu [ i ] = elem );
						}
					}
				} ):
				hàm(elem, _context, xml) {
					đầu vào [ 0 ] = phần tử;
					trình so khớp(đầu vào, null, xml, kết quả);

					// Đừng giữ phần tử
					// (xem https://github.com/jquery/sizzle/issues/299)
					đầu vào [0] = null;
					return !results.pop();
				};
		} ),

		có: markFunction(function(selector) {
			hàm trả về( elem ) {
				return find(selector, elem ).length > 0;
			};
		} ),

		chứa: markFunction(function(text ) {
			văn bản = text.replace( runescape, funescape );
			hàm trả về( elem ) {
				return ( elem.textContent || jQuery.text( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Liệu một phần tử có được đại diện bởi bộ chọn :lang() hay không
		// chỉ dựa trên giá trị ngôn ngữ của phần tử
		// bằng định danh C,
		// hoặc bắt đầu bằng mã định danh C ngay sau đó là "-".
		// Việc khớp C với giá trị ngôn ngữ của phần tử được thực hiện không phân biệt chữ hoa chữ thường.
		// Mã định danh C không nhất thiết phải là tên ngôn ngữ hợp lệ."
		// https://www.w3.org/TR/selectors/#lang-pseudo
		lang: markFunction(hàm( lang ) {

			// giá trị lang phải là định danh hợp lệ
			if ( !ridentifier.test( lang || "" ) ) {
				find.error( "lang không được hỗ trợ: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			hàm trả về( elem ) {
				var elemLang;
				LÀM {
					nếu ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribution( "xml:lang" ) || elem.getAttribution( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf(lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				trả về sai;
			};
		} ),

		// Điều khoản khác
		mục tiêu: hàm( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		gốc: hàm( elem ) {
			trả về phần tử === documentElement;
		},

		tiêu điểm: hàm( elem ) {
			trả về elem === safeActiveElement() &&
				document.hasFocus() &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Thuộc tính Boolean
		đã bật: createDisabledPseudo(false),
		đã bị vô hiệu hóa: createDisabledPseudo(true),

		đã kiểm tra: hàm( elem ) {

			// Trong CSS3, :checked sẽ trả về cả phần tử đã chọn và phần tử đã chọn
			// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			return ( nodeName( elem, "input" ) && !!elem.checked ) ||
				( nodeName( elem, "option" ) && !!elem.selected );
		},

		đã chọn: hàm( elem ) {

			// Hỗ trợ: IE <=11+
			// Truy cập thuộc tính selectedIndex
			// buộc trình duyệt coi tùy chọn mặc định là
			// được chọn khi ở trong optgroup.
			if ( elem.parentNode ) {
				// eslint-disable-next-line không có biểu thức không sử dụng
				elem.parentNode.selectedIndex;
			}

			trả về elem.selected === true;
		},

		// Nội dung
		trống: hàm( elem ) {

			// https://www.w3.org/TR/selectors/#empty-pseudo
			// :empty bị phủ định bởi phần tử (1) hoặc các nút nội dung (văn bản: 3; cdata: 4; tham chiếu thực thể: 5),
			// nhưng không phải bởi người khác (bình luận: 8; hướng dẫn xử lý: 7; v.v.)
			// nodeType < 6 hoạt động vì thuộc tính (2) không xuất hiện dưới dạng con
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				nếu ( elem.nodeType < 6 ) {
					trả về sai;
				}
			}
			trả về đúng sự thật;
		},

		cha mẹ: hàm( elem ) {
			return !Expr.pseudos.empty( elem );
		},

		// Kiểu phần tử/đầu vào
		tiêu đề: hàm( elem ) {
			return rheader.test( elem.nodeName );
		},

		đầu vào: hàm( elem ) {
			trả về rinputs.test( elem.nodeName );
		},

		nút: hàm( elem ) {
			return nodeName( elem, "input" ) && elem.type === "button" ||
				nodeName(elem, "button" );
		},

		văn bản: hàm( elem ) {
			var attr;
			trả về nodeName( elem, "input" ) && elem.type === "text" &&

				// Hỗ trợ: Chỉ IE <10
				// Các giá trị thuộc tính HTML5 mới (ví dụ: "tìm kiếm") xuất hiện
				// với elem.type === "văn bản"
				( ( attr = elem.getAttribution( "type") ) == null ||
					attr.toLowerCase() === "văn bản" );
		},

		// Vị trí trong bộ sưu tập
		đầu tiên: createPositionalPseudo(function() {
			trả về [ 0 ];
		} ),

		cuối cùng: createPositionalPseudo(function( _matchIndexes, length ) {
			trả về [ chiều dài - 1 ];
		} ),

		eq: createPositionalPseudo(hàm(_matchIndexes, độ dài, đối số) {
			trả về [ đối số < 0 ? đối số + độ dài : đối số ];
		} ),

		thậm chí: createPositionalPseudo(function(matchIndexes, length) {
			var i = 0;
			cho ( ; i < chiều dài; i += 2 ) {
				matchIndexes.push(i );
			}
			trả về các chỉ số khớp;
		} ),

		số lẻ: createPositionalPseudo(function(matchIndexes, length ) {
			var i = 1;
			cho ( ; i < chiều dài; i += 2 ) {
				matchIndexes.push(i );
			}
			trả về các chỉ số khớp;
		} ),

		lt: createPositionalPseudo(function(matchIndexes, length,argument) {
			là tôi;

			nếu ( đối số < 0 ) {
				i = đối số + độ dài;
			} khác nếu ( đối số > độ dài ) {
				tôi = chiều dài;
			} khác {
				tôi = lý lẽ;
			}

			cho ( ; --i >= 0; ) {
				matchIndexes.push(i );
			}
			trả về các chỉ số khớp;
		} ),

		gt: createPositionalPseudo(hàm(matchIndexes, độ dài, đối số) {
			var i = đối số < 0 ? đối số + độ dài: đối số;
			cho ( ; ++i < chiều dài; ) {
				matchIndexes.push(i );
			}
			trả về các chỉ số khớp;
		} )
	}
};

Expr.pseudos.nth = Expr.pseudos.eq;

// Thêm nút giả/loại đầu vào
for ( i in { radio: true, hộp kiểm: true, file: true, mật khẩu: true, hình ảnh: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// API dễ dàng để tạo setFilters mới
hàm setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = setFilters mới();

hàm tokenize( bộ chọn, phân tích cú pháp ) {
	var đã khớp, khớp, mã thông báo, loại,
		soFar, nhóm, bộ lọc trước,
		đã lưu vào bộ nhớ cache = tokenCache[ bộ chọn + " " ];

	nếu ( đã lưu vào bộ nhớ đệm ) {
		trả lại phân tích cú pháp? 0 : cache.slice( 0 );
	}

	soFar = bộ chọn;
	nhóm = [];
	preFilters = Expr.preFilter;

	trong khi ( soFar ) {

		// Dấu phẩy và lần chạy đầu tiên
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			nếu ( khớp ) {

				// Không sử dụng dấu phẩy ở cuối là hợp lệ
				soFar = soFar.slice(match[ 0 ].length ) || cho đến nay;
			}
			group.push( ( token = [] ) );
		}

		khớp = sai;

		// Bộ kết hợp
		if ( ( match = rleadCombinator.exec( soFar ) ) ) {
			đã khớp = match.shift();
			token.push( {
				giá trị: khớp,

				// Truyền các tổ hợp con cháu vào không gian
				gõ: match[ 0 ].replace( rtrimCSS, " " )
			} );
			soFar = soFar.slice(match.length);
		}

		// Bộ lọc
		for ( gõ vào Expr.filter ) {
			if ( ( match = matchExpr[ type .exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				đã khớp = match.shift();
				token.push( {
					giá trị: khớp,
					loại: loại,
					trận đấu: trận đấu
				} );
				soFar = soFar.slice(match.length);
			}
		}

		nếu ( !khớp ) {
			phá vỡ;
		}
	}

	// Trả về độ dài của phần vượt quá không hợp lệ
	// nếu chúng ta chỉ phân tích cú pháp
	// Ngược lại, đưa ra lỗi hoặc trả về mã thông báo
	nếu (parseOnly) {
		trả về soFar.length;
	}

	trở lại cho đến nay?
		find.error( bộ chọn ):

		// Lưu trữ mã thông báo
		tokenCache( bộ chọn, nhóm ).slice( 0 );
}

hàm toSelector(mã thông báo) {
	var i = 0,
		len = token.length,
		bộ chọn = "";
	cho ( ; tôi < len; i++ ) {
		bộ chọn += mã thông báo[ i ].value;
	}
	bộ chọn trả về;
}

hàm addCombinator(matcher, combinator, base ) {
	var dir = combinator.dir,
		bỏ qua = combinator.next,
		phím = bỏ qua || thư mục,
		checkNonElements = base && key === "parentNode",
		doneName = xong++;

	trả về combinator.first ?

		// Kiểm tra phần tử tổ tiên/trước gần nhất
		hàm(elem, bối cảnh, xml) {
			trong khi ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					trình so khớp trả về( elem, context, xml );
				}
			}
			trả về sai;
		} :

		// Kiểm tra tất cả các phần tử tổ tiên/trước
		hàm(elem, bối cảnh, xml) {
			var oldCache, externalCache,
				newCache = [ dirruns, doneName ];

			// Chúng tôi không thể đặt dữ liệu tùy ý trên các nút XML, vì vậy chúng không được hưởng lợi từ bộ đệm ẩn tổ hợp
			nếu (xml) {
				trong khi ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							trả về đúng sự thật;
						}
					}
				}
			} khác {
				trong khi ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						bên ngoàiCache = elem[ mở rộng ] || ( elem[ mở rộng ] = {} );

						if ( bỏ qua && nodeName( elem, bỏ qua ) ) {
							elem = elem[ thư mục ] || yếu tố;
						} khác nếu ( ( oldCache = externalCache[ key ] ) &&
							oldCache[ 0 ] === dirrun && oldCache[ 1 ] === doneName ) {

							// Gán cho newCache để kết quả truyền ngược về các phần tử trước đó
							trả về ( newCache[ 2 ] = oldCache[ 2 ] );
						} khác {

							// Tái sử dụng newcache để kết quả lan truyền ngược về các phần tử trước đó
							externalCache[key] = newCache;

							// Một trận đấu có nghĩa là chúng ta đã hoàn thành; thất bại có nghĩa là chúng ta phải tiếp tục kiểm tra
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								trả về đúng sự thật;
							}
						}
					}
				}
			}
			trả về sai;
		};
}

hàm elementMatcher(matcher) {
	trả về matchers.length > 1?
		hàm(elem, bối cảnh, xml) {
			var i = matchers.length;
			trong khi tôi-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					trả về sai;
				}
			}
			trả về đúng sự thật;
		} :
		người so khớp[ 0 ];
}

hàm multipleContexts( bộ chọn, bối cảnh, kết quả) {
	var i = 0,
		len = bối cảnh.length;
	cho ( ; tôi < len; i++ ) {
		find( bộ chọn, ngữ cảnh[ i ], kết quả );
	}
	trả về kết quả;
}

hàm ngưng tụ (chưa từng có, bản đồ, bộ lọc, ngữ cảnh, xml) {
	yếu tố khác,
		mớiChưa từng có = [],
		tôi = 0,
		len = chưa từng có.độ dài,
		ánh xạ = bản đồ != null;

	cho ( ; tôi < len; i++ ) {
		if ( ( elem = chưa từng có[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				nếu ( được ánh xạ ) {
					map.push( i );
				}
			}
		}
	}

	return newChưa từng có;
}

hàm setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ bung rộng ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ bungo ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	trả về markFunction(function(seed, results, context, xml ) {
		var temp, i, elem, matcherOut,
			bản đồ trước = [],
			postMap = [],
			tồn tại từ trước = results.length,

			// Lấy các phần tử ban đầu từ hạt giống hoặc ngữ cảnh
			yếu tố = hạt giống ||
				multipleContexts( bộ chọn || "*",
					bối cảnh.nodeType? [ngữ cảnh] : bối cảnh, [] ),

			// Lọc trước để nhận đầu vào của trình so khớp, bảo toàn bản đồ để đồng bộ hóa kết quả hạt giống
			matcherIn = preFilter && (seed || !selector ) ?
				ngưng tụ( elems, preMap, preFilter, context, xml ):
				yếu tố;

		nếu ( đối sánh ) {

			// Nếu chúng ta có postFinder, hoặc hạt giống được lọc hoặc postFilter không phải hạt giống
			// hoặc kết quả có sẵn,
			matcherOut = postFinder || ( hạt giống ? preFilter : có sẵn || postFilter ) ?

				// ...việc xử lý trung gian là cần thiết
				[] :

				// ...nếu không thì sử dụng kết quả trực tiếp
				kết quả;

			// Tìm kết quả khớp chính
			matcher(matcherIn, matcherOut, context, xml );
		} khác {
			matcherOut = matcherIn;
		}

		// Áp dụng postFilter
		nếu ( postFilter ) {
			temp = ngưng tụ(matcherOut, postMap);
			postFilter(temp, [], context, xml );

			// Loại bỏ các phần tử bị lỗi bằng cách chuyển chúng trở lại matcherIn
			i = temp.length;
			trong khi tôi-- ) {
				nếu ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		nếu ( hạt giống ) {
			if ( postFinder || preFilter ) {
				nếu ( postFinder ) {

					// Lấy matcherOut cuối cùng bằng cách cô đọng phần trung gian này vào các bối cảnh postFinder
					nhiệt độ = [];
					i = matcherOut.length;
					trong khi tôi-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Khôi phục matcherIn vì elem chưa phải là kết quả khớp cuối cùng
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Di chuyển các phần tử phù hợp từ hạt giống đến kết quả để giữ chúng được đồng bộ hóa
				i = matcherOut.length;
				trong khi tôi-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf.call(seed, elem ) : preMap[ i ] ) > -1 ) {

						hạt giống [ temp ] = !( kết quả [ temp ] = elem );
					}
				}
			}

		// Thêm phần tử vào kết quả, thông qua postFinder nếu được xác định
		} khác {
			matcherOut = ngưng tụ(
				matcherOut === kết quả?
					matcherOut.splice(có sẵn, matcherOut.length ):
					người so khớpOut
			);
			nếu ( postFinder ) {
				postFinder(null, results, matcherOut, xml );
			} khác {
				push.apply(kết quả, matcherOut);
			}
		}
	} );
}

hàm matcherFromTokens(token) {
	var checkContext, matcher, j,
		len = token.length,
		leadRelative = Expr.relative[ token[ 0 ].type ],
		ngầmRelative = leadRelative || Expr.relative[ " " ],
		i = hàng đầuRelative ? 1: 0,

		// Trình so khớp cơ bản đảm bảo rằng các phần tử có thể truy cập được từ (các) ngữ cảnh cấp cao nhất
		matchContext = addCombinator(function(elem) {
			trả về phần tử === checkContext;
		}, ngầm địnhRelative, true ),
		matchAnyContext = addCombinator(function(elem) {
			trả về indexOf.call( checkContext, elem ) > -1;
		}, ngầm địnhRelative, true ),
		trình so khớp = [hàm( elem, bối cảnh, xml ) {

			// Hỗ trợ: IE 11+, Edge 17 - 18+
			// IE/Edge đôi khi đưa ra lỗi "Quyền bị từ chối" khi so sánh nghiêm ngặt
			// hai tài liệu; sự so sánh nông cạn có tác dụng.
			// eslint-disable-next-line eqeqeq
			var ret = ( !leadRelative && ( xml || context !=outermostContext ) ) || (
				( checkContext = bối cảnh ).nodeType ?
					matchContext(elem, context, xml):
					matchAnyContext( elem, context, xml ) );

			// Tránh treo vào phần tử
			// (xem https://github.com/jquery/sizzle/issues/299)
			checkContext = null;
			trở lại ret;
		} ];

	cho ( ; tôi < len; i++ ) {
		if ( ( matcher = Expr.relative[ token[ i ].type ] ) ) {
			bộ so khớp = [ addCombinator( elementMatcher( bộ so khớp ), bộ so khớp ) ];
		} khác {
			matcher = Expr.filter[ token[ i ].type .apply( null, token[ i ].matches );

			// Trả về giá trị đặc biệt khi nhìn thấy đối sánh vị trí
			if ( matcher[ mở rộng ] ) {

				// Tìm toán tử tương đối tiếp theo (nếu có) để xử lý đúng cách
				j = ++i;
				cho ( ; j < len; j++ ) {
					if ( Expr.relative[ token[ j ].type ] ) {
						phá vỡ;
					}
				}
				trả về setMatcher(
					i > 1 && elementMatcher(matcher),
					i > 1 && toSelector(

						// Nếu mã thông báo trước đó là tổ hợp con, hãy chèn phần tử bất kỳ ẩn `*`
						token.slice( 0, i - 1 )
							.concat( { value: token[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrimCSS, "$1" ),
					người mai mối,
					i < j && matcherFromTokens( token.slice( i, j ) ),
					j < len && matcherFromTokens( ( token = token.slice( j ) ) ),
					j < len && toSelector( token )
				);
			}
			matchers.push(matcher );
		}
	}

	trả về elementMatcher(matchers);
}

hàm matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function(seed, bối cảnh, xml, results, ngoài cùng) {
			var elem, j, matcher,
				số lượng khớp = 0,
				tôi = "0",
				chưa từng có = hạt giống && [],
				setMatched = [],
				bối cảnhBackup = ngoài cùngContext,

				// Chúng ta phải luôn có các phần tử hạt giống hoặc ngữ cảnh ngoài cùng
				yếu tố = hạt giống || byElement && Expr.find.TAG( "*", ngoài cùng ),

				// Sử dụng các dirrun số nguyên nếu đây là trình so khớp ngoài cùng
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			nếu ( ngoài cùng ) {

				// Hỗ trợ: IE 11+, Edge 17 - 18+
				// IE/Edge đôi khi đưa ra lỗi "Quyền bị từ chối" khi so sánh nghiêm ngặt
				// hai tài liệu; sự so sánh nông cạn có tác dụng.
				// eslint-disable-next-line eqeqeq
				ngoài cùngContext = bối cảnh == tài liệu || bối cảnh || ngoài cùng;
			}

			// Thêm các phần tử truyền trực tiếp elementMatchers vào kết quả
			// Hỗ trợ: Chỉ iOS <=7 - 9
			// Chấp nhận các thuộc tính NodeList (IE: "length"; Safari: <number>) khớp
			// phần tử theo id. (xem trac-14142)
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Hỗ trợ: IE 11+, Edge 17 - 18+
					// IE/Edge đôi khi đưa ra lỗi "Quyền bị từ chối" khi so sánh nghiêm ngặt
					// hai tài liệu; sự so sánh nông cạn có tác dụng.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument(elem);
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, bối cảnh || tài liệu, xml ) ) {
							push.call(kết quả, elem);
							phá vỡ;
						}
					}
					nếu ( ngoài cùng ) {
						dirruns = dirrunUnique;
					}
				}

				// Theo dõi các phần tử chưa khớp cho bộ lọc đã đặt
				nếu ( bySet ) {

					// Họ sẽ xem xét tất cả các đối sánh có thể
					if ( ( elem = !matcher && elem ) ) {
						đã khớpCount--;
					}

					// Kéo dài mảng cho mọi phần tử, khớp hay không
					nếu ( hạt giống ) {
						chưa từng có.push(elem);
					}
				}
			}

			// `i` bây giờ là số phần tử được truy cập ở trên và thêm nó vào `matchedCount`
			// làm cho cái sau không âm.
			đã khớpCount += i;

			// Áp dụng các bộ lọc đã đặt cho các phần tử chưa khớp
			// LƯU Ý: Phần này có thể được bỏ qua nếu không có phần tử nào chưa khớp (ví dụ: `matchedCount`
			// bằng `i`), trừ khi chúng ta không truy cập phần tử _any_ trong vòng lặp trên vì chúng ta có
			// không có bộ so khớp phần tử và không có hạt giống.
			// Tăng một chuỗi ban đầu "0" `i` cho phép `i` chỉ giữ lại một chuỗi trong chuỗi đó
			// trường hợp, sẽ dẫn đến một "00" `matchedCount` khác với `i` nhưng cũng là
			// về số 0.
			if ( bySet && i !==matchCount ) {
				j = 0;
				trong khi ( ( matcher = setMatchers[ j++ ] ) ) {
					trình so khớp (chưa từng có, setMatched, bối cảnh, xml);
				}

				nếu ( hạt giống ) {

					// Tích hợp lại các kết quả khớp phần tử để loại bỏ nhu cầu sắp xếp
					nếu (matchCount > 0 ) {
						trong khi tôi-- ) {
							if ( !( chưa từng có[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Loại bỏ các giá trị giữ chỗ chỉ mục để chỉ nhận các kết quả khớp thực tế
					setMatched = ngưng tụ( setMatched );
				}

				// Thêm kết quả phù hợp vào kết quả
				push.apply(kết quả, setMatched);

				// Tập hợp không hạt giống nối tiếp nhiều bộ so khớp thành công quy định việc sắp xếp
				if ( ngoài cùng && !seed && setMatched.length > 0 &&
					(matchCount + setMatchers.length ) > 1 ) {

					jQuery.uniqueSort(kết quả);
				}
			}

			// Ghi đè thao tác toàn cục bằng các đối sánh lồng nhau
			nếu ( ngoài cùng ) {
				dirruns = dirrunUnique;
				ngoài cùngContext = contextBackup;
			}

			trở lại chưa từng có;
		};

	trả lại bằng Set ?
		markFunction( superMatcher ):
		superMatcher;
}

hàm biên dịch( bộ chọn, khớp /* Chỉ sử dụng nội bộ */ ) {
	tôi,
		setMatchers = [],
		phần tửMatchers = [],
		được lưu vào bộ nhớ cache = trình biên dịchCache[ bộ chọn + " " ];

	nếu ( !được lưu trong bộ nhớ đệm ) {

		// Tạo một hàm gồm các hàm đệ quy có thể dùng để kiểm tra từng phần tử
		nếu ( !match ) {
			match = tokenize( bộ chọn );
		}
		i = match.length;
		trong khi tôi-- ) {
			đã lưu vào bộ nhớ đệm = matcherFromTokens(match[ i ] );
			if ( đã lưu vào bộ nhớ cache[ bung rộng ] ) {
				setMatchers.push(đã lưu vào bộ nhớ cache);
			} khác {
				elementMatchers.push(đã lưu vào bộ nhớ cache);
			}
		}

		// Cache hàm đã biên dịch
		đã lưu vào bộ nhớ cache = trình biên dịchCache(bộ chọn,
			matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Lưu bộ chọn và mã thông báo
		cached.selector = bộ chọn;
	}
	trả lại bộ nhớ đệm;
}

/**
 * Một hàm lựa chọn cấp thấp hoạt động với trình biên dịch của jQuery
 * chức năng chọn
 * Bộ chọn @param {String|Function} Bộ chọn hoặc bộ chọn được biên dịch trước
 * hàm chọn được xây dựng bằng trình biên dịch bộ chọn jQuery
 * bối cảnh @param {Element}
 * @param {Mảng} [kết quả]
 * @param {Array} [seed] Một tập hợp các phần tử để so khớp
 */
hàm chọn( bộ chọn, ngữ cảnh, kết quả, hạt giống) {
	var i, mã thông báo, mã thông báo, loại, tìm,
		được biên dịch = bộ chọn typeof === "hàm" && bộ chọn,
		match = !seed && tokenize( ( selector = biên soạn.selector || selector ) );

	kết quả = kết quả || [];

	// Cố gắng giảm thiểu các thao tác nếu chỉ có một bộ chọn trong danh sách và không có hạt giống
	// (cái sau đảm bảo cho chúng ta bối cảnh)
	if ( match.length === 1 ) {

		// Giảm ngữ cảnh nếu bộ chọn ghép hàng đầu là ID
		mã thông báo = trận đấu [ 0 ] = trận đấu [ 0 ].slice( 0 );
		if ( token.length > 2 && ( token = token[ 0 ] ).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ token[ 1 ].type ] ) {

			bối cảnh = ( Expr.find.ID(
				token.matches[ 0 ].replace( runescape, funescape ),
				bối cảnh
			) || [] )[ 0 ];
			nếu ( !bối cảnh ) {
				trả về kết quả;

			// Trình so khớp được biên dịch trước vẫn sẽ xác minh tổ tiên, vì vậy hãy nâng cấp
			} khác nếu ( đã biên dịch ) {
				bối cảnh = bối cảnh.parentNode;
			}

			bộ chọn = selector.slice( token.shift().value.length );
		}

		// Lấy một tập hợp hạt giống để so khớp từ phải sang trái
		i = matchExpr.needsContext.test(bộ chọn)? 0 : token.length;
		trong khi tôi-- ) {
			mã thông báo = mã thông báo [ i ];

			// Hủy bỏ nếu chúng ta nhấn tổ hợp
			if ( Expr.relative[ ( type = token.type ) ] ) {
				phá vỡ;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Tìm kiếm, mở rộng bối cảnh cho các tổ hợp anh chị em hàng đầu
				nếu ( ( hạt giống = tìm (
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( token[ 0 ].type ) &&
						testContext( context.parentNode ) || bối cảnh
				) ) ) {

					// Nếu hạt giống trống hoặc không còn mã thông báo, chúng tôi có thể quay lại sớm
					token.splice( i, 1 );
					selector = Seed.length && toSelector( token );
					nếu ( !selector ) {
						push.apply(kết quả, hạt giống);
						trả về kết quả;
					}

					phá vỡ;
				}
			}
		}
	}

	// Biên dịch và thực thi chức năng lọc nếu không được cung cấp
	// Cung cấp `match` để tránh việc mã hóa lại nếu chúng tôi sửa đổi bộ chọn ở trên
	( đã biên dịch || biên dịch( bộ chọn, khớp ) )(
		hạt giống,
		bối cảnh,
		!documentIsHTML,
		kết quả,
		!bối cảnh || rsibling.test( selector ) && testContext( context.parentNode ) || bối cảnh
	);
	trả về kết quả;
}

// Bài tập một lần

// Hỗ trợ: Android <=4.0 - 4.1+
// Sắp xếp tính ổn định
support.sortStable = Expando.split( "" ).sort(sortOrder ).join( "" ) === openo;

// Khởi tạo dựa trên tài liệu mặc định
setDocument();

// Hỗ trợ: Android <=4.0 - 4.1+
// Các nút tách rời nối tiếp nhau một cách khó hiểu *
support.sortDetached = khẳng định( function( el ) {

	// Nên trả về 1, nhưng trả về 4 (tiếp theo)
	return el.compareDocumentPosition( document.createElement( "fieldset") ) & 1;
} );

jQuery.find = tìm;

// Không dùng nữa
jQuery.expr[ `` `` = jQuery.expr.pseudos;
jQuery.unique = jQuery.uniqueSort;

// Những thứ này luôn ở chế độ riêng tư, nhưng chúng từng được ghi lại như một phần của
// Sizzle vì vậy hãy duy trì chúng ngay bây giờ cho mục đích tương thích ngược.
find.compile = biên dịch;
find.select = chọn;
find.setDocument = setDocument;
find.tokenize = tokenize;

find.escape = jQuery.escapeSelector;
find.getText = jQuery.text;
find.isXML = jQuery.isXMLDoc;
find.selectors = jQuery.expr;
find.support = jQuery.support;
find.uniqueSort = jQuery.uniqueSort;

	/* kích hoạt eslint */

} )();


var dir = function( elem, dir, cho đến khi ) {
	var khớp = [],
		cắt ngắn = cho đến khi !== không xác định;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( cắt ngắn && jQuery( elem ).is( cho đến khi ) ) {
				phá vỡ;
			}
			match.push(elem);
		}
	}
	trả lại khớp;
};


var anh chị em = function( n, elem ) {
	var khớp = [];

	cho ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			đã khớp.đẩy( n );
		}
	}

	trả lại khớp;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([az][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>( ?:<\/\1>|)$/i );



// Triển khai chức năng tương tự cho bộ lọc chứ không phải
hàm winnow( phần tử, vòng loại, không ) {
	if ( isFunction( vòng loại ) ) {
		trả về jQuery.grep( phần tử, hàm( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Phần tử đơn
	if ( vòng loại.nodeType ) {
		trả về jQuery.grep( phần tử, hàm( elem ) {
			return ( elem === vòng loại ) !== không;
		} );
	}

	// Kiểu mảng của các phần tử (jQuery, đối số, Array)
	if ( vòng loại loại !== "chuỗi" ) {
		trả về jQuery.grep( phần tử, hàm( elem ) {
			return ( indexOf.call( vòng loại, elem ) > -1 ) !== không;
		} );
	}

	// Lọc trực tiếp cho cả bộ chọn đơn giản và bộ chọn phức tạp
	return jQuery.filter( vòng loại, phần tử, không );
}

jQuery.filter = function(expr, elems, not ) {
	var elem = elems[ 0 ];

	nếu không ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		trả về jQuery.find.matchesSelector( elem, expr ) ? [ yếu tố ] : [];
	}

	trả về jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		trả về elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	tìm: hàm( bộ chọn ) {
		var i, ret,
			len = this.length,
			tự = cái này;

		if (bộ chọn typeof !== "chuỗi" ) {
			trả về this.pushStack( jQuery( selector ).filter( function() {
				cho ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						trả về đúng sự thật;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		cho ( i = 0; i < len; i++ ) {
			jQuery.find( bộ chọn, self[ i ], ret );
		}

		trả về len > 1 ? jQuery.uniqueSort(ret): ret;
	},
	bộ lọc: hàm (bộ chọn) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	không phải: hàm( bộ chọn ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	là: hàm( bộ chọn ) {
		quay lại !!winnow(
			cái này,

			// Nếu đây là bộ chọn vị trí/tương đối, hãy kiểm tra tư cách thành viên trong tập được trả về
			// vì vậy $("p:first").is("p:last") sẽ không trả về true cho một tài liệu có hai "p".
			bộ chọn typeof === "chuỗi" && rneedsContext.test( bộ chọn) ?
				jQuery( bộ chọn ):
				bộ chọn || [],
			SAI
		).chiều dài;
	}
} );


// Khởi tạo một đối tượng jQuery


// Một tham chiếu trung tâm tới thư mục gốc jQuery(document)
var rootjQuery,

	// Một cách đơn giản để kiểm tra chuỗi HTML
	// Ưu tiên #id hơn <tag> để tránh XSS qua location.hash (trac-9521)
	// Nhận dạng HTML nghiêm ngặt (trac-11290: phải bắt đầu bằng <)
	// Phím tắt trường hợp #id đơn giản cho tốc độ
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function(bộ chọn, ngữ cảnh, gốc) {
		var match, elem;

		// XỬ LÝ: $(""), $(null), $(không xác định), $(false)
		nếu ( !selector ) {
			trả lại cái này;
		}

		// Phương thức init() chấp nhận một rootjQuery thay thế
		// vì vậy di chuyển có thể hỗ trợ jQuery.sub (gh-2101)
		gốc = gốc || rootjQuery;

		// Xử lý chuỗi HTML
		if (bộ chọn typeof === "chuỗi" ) {
			if ( bộ chọn [ 0 ] === "<" &&
				bộ chọn [ selector.length - 1 ] === ">" &&
				bộ chọn.length >= 3 ) {

				// Giả sử các chuỗi bắt đầu và kết thúc bằng <> là HTML và bỏ qua việc kiểm tra biểu thức chính quy
				khớp = [ null, bộ chọn, null ];

			} khác {
				match = rquickExpr.exec( bộ chọn );
			}

			// So khớp html hoặc đảm bảo không có ngữ cảnh nào được chỉ định cho #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// XỬ LÝ: $(html) -> $(array)
				nếu ( khớp[ 1 ] ) {
					bối cảnh = phiên bản bối cảnh của jQuery? bối cảnh[ 0 ] : bối cảnh;

					// Tùy chọn chạy tập lệnh là đúng cho tính năng tương thích ngược
					// Cố tình để lỗi xảy ra nếu không có parsHTML
					jQuery.merge( cái này, jQuery.parseHTML(
						trận đấu[1],
						bối cảnh && bối cảnh.nodeType? context.ownerDocument || bối cảnh: tài liệu,
						ĐÚNG VẬY
					) );

					// XỬ LÝ: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for (khớp trong ngữ cảnh) {

							// Thuộc tính của ngữ cảnh được gọi là phương thức nếu có thể
							if ( isFunction( this[match ] ) ) {
								cái này[khớp](ngữ cảnh[khớp] );

							// ...và nếu không thì đặt làm thuộc tính
							} khác {
								this.attr(match, context[ match ] );
							}
						}
					}

					trả lại cái này;

				// XỬ LÝ: $(#id)
				} khác {
					elem = document.getElementById(match[ 2 ] );

					nếu ( elem ) {

						// Đưa phần tử trực tiếp vào đối tượng jQuery
						this[ 0 ] = elem;
						this.length = 1;
					}
					trả lại cái này;
				}

			// XỬ LÝ: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( bối cảnh || root ).find( selector );

			// XỬ LÝ: $(expr, bối cảnh)
			// (tương đương với: $(context).find(expr)
			} khác {
				trả về this.constructor( context ).find( selector );
			}

		// XỬ LÝ: $(DOMElement)
		} khác nếu ( selector.nodeType ) {
			cái này [ 0 ] = bộ chọn;
			this.length = 1;
			trả lại cái này;

		// XỬ LÝ: $(hàm)
		// Phím tắt cho tài liệu đã sẵn sàng
		} khác nếu ( isFunction( selector ) ) {
			trả về root.ready !== không xác định ?
				root.ready( bộ chọn ):

				// Thực thi ngay lập tức nếu chưa sẵn sàng
				bộ chọn(jQuery);
		}

		trả về jQuery.makeArray( bộ chọn, cái này);
	};

// Cung cấp cho hàm init nguyên mẫu jQuery để khởi tạo sau này
init.prototype = jQuery.fn;

// Khởi tạo tham chiếu trung tâm
rootjQuery = jQuery(tài liệu);


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Các phương thức đảm bảo tạo ra một tập hợp duy nhất khi bắt đầu từ một tập hợp duy nhất
	đảm bảoUnique = {
		trẻ em: đúng,
		nội dung: đúng,
		tiếp theo: đúng,
		trước: đúng
	};

jQuery.fn.extend( {
	có: hàm(mục tiêu) {
		var target = jQuery( target, this ),
			l = target.length;

		trả về this.filter( function() {
			var i = 0;
			cho ( ; tôi < l; i++ ) {
				if ( jQuery.contains( this, target[ i ] ) ) {
					trả về đúng sự thật;
				}
			}
		} );
	},

	gần nhất: hàm( bộ chọn, ngữ cảnh) {
		var cur,
			tôi = 0,
			l = this.length,
			khớp = [],
			target = bộ chọn typeof !== "chuỗi" && jQuery( bộ chọn);

		// Bộ chọn vị trí không bao giờ khớp vì không có ngữ cảnh _selection_
		if ( !rneedsContext.test( bộ chọn ) ) {
			cho ( ; tôi < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== bối cảnh; cur = cur.parentNode ) {

					// Luôn bỏ qua các đoạn tài liệu
					if (cur.nodeType < 11 && (mục tiêu ?
						target.index( cur ) > -1 :

						// Đừng chuyển các phần tử không phải phần tử cho jQuery#find
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, bộ chọn ) ) ) {

						match.push( cur );
						phá vỡ;
					}
				}
			}
		}

		return this.pushStack(match.length > 1 ? jQuery.uniqueSort(match): khớp);
	},

	// Xác định vị trí của một phần tử trong tập hợp
	chỉ mục: hàm( elem ) {

		// Không có đối số, trả về chỉ mục trong cha mẹ
		nếu ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Chỉ mục trong bộ chọn
		if ( typeof elem === "chuỗi" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Xác định vị trí của phần tử mong muốn
		trả về indexOf.call( cái này,

			// Nếu nó nhận được một đối tượng jQuery, phần tử đầu tiên sẽ được sử dụng
			elem.jquery? elem[ 0 ] : elem
		);
	},

	thêm: hàm (bộ chọn, ngữ cảnh) {
		trả lại cái này.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( bộ chọn, ngữ cảnh ) )
			)
		);
	},

	addBack: hàm( bộ chọn ) {
		trả về this.add( bộ chọn == null ?
			this.prevObject : this.prevObject.filter( bộ chọn )
		);
	}
} );

hàm anh chị em( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	trở lại cur;
}

jQuery.each( {
	cha mẹ: hàm( elem ) {
		var parent = elem.parentNode;
		trả về cha mẹ && parent.nodeType !== 11 ? cha mẹ : null;
	},
	cha mẹ: hàm( elem ) {
		return dir(elem, "parentNode" );
	},
	parentUntil: function( elem, _i, cho đến khi ) {
		return dir(elem, "parentNode", cho đến khi );
	},
	tiếp theo: hàm( elem ) {
		return anh chị em( elem, "nextSibling" );
	},
	trước: hàm( elem ) {
		return anh chị em( elem, "previousSibling" );
	},
	nextAll: hàm( elem ) {
		return dir(elem, "nextSibling" );
	},
	trướcTất cả: hàm( elem ) {
		return dir(elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, cho đến khi ) {
		return dir(elem, "nextSibling", cho đến khi );
	},
	prevUntil: function( elem, _i, cho đến khi ) {
		return dir( elem, "previousSibling", cho đến );
	},
	anh chị em: hàm( elem ) {
		return anh chị em( ( elem.parentNode || {} ).firstChild, elem );
	},
	con: hàm( elem ) {
		return anh chị em( elem.firstChild );
	},
	nội dung: hàm( elem ) {
		if ( elem.contentDocument != null &&

			// Hỗ trợ: IE 11+
			// Các phần tử <object> không có thuộc tính `data` có một đối tượng
			// `contentDocument` với nguyên mẫu `null`.
			getProto( elem.contentDocument ) ) {

			trả về elem.contentDocument;
		}

		// Hỗ trợ: Chỉ IE 9 - 11, chỉ iOS 7, chỉ Trình duyệt Android <= 4.3
		// Coi phần tử mẫu như một phần tử thông thường trong các trình duyệt
		// không hỗ trợ nó.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || yếu tố;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, hàm( tên, fn ) {
	jQuery.fn[ tên] = function( cho đến khi, bộ chọn ) {
		varmatch = jQuery.map(this, fn, Until );

		if ( name.slice( -5 ) !== "Cho đến" ) {
			bộ chọn = cho đến khi;
		}

		if ( bộ chọn && bộ chọn typeof === "chuỗi" ) {
			đã khớp = jQuery.filter( bộ chọn, đã khớp);
		}

		if ( this.length > 1 ) {

			// Loại bỏ các bản sao
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort(match);
			}

			// Đảo ngược thứ tự của cha mẹ* và các dẫn xuất trước
			if ( rparentsprev.test(name ) ) {
				match.reverse();
			}
		}

		trả về this.pushStack(match);
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Chuyển đổi các tùy chọn có định dạng Chuỗi thành các tùy chọn có định dạng Đối tượng
hàm createOptions( tùy chọn ) {
	đối tượng var = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		đối tượng [cờ] = đúng;
	} );
	trả lại đối tượng;
}

/*
 * Tạo danh sách gọi lại bằng các tham số sau:
 *
 * tùy chọn: một danh sách tùy chọn gồm các tùy chọn được phân tách bằng dấu cách sẽ thay đổi cách thức
 * danh sách gọi lại hoạt động hoặc một đối tượng tùy chọn truyền thống hơn
 *
 * Theo mặc định, danh sách gọi lại sẽ hoạt động giống như danh sách gọi lại sự kiện và có thể
 * "sa thải" nhiều lần.
 *
 * Các lựa chọn có thể:
 *
 * một lần: sẽ đảm bảo danh sách gọi lại chỉ có thể được kích hoạt một lần (như Trì hoãn)
 *
 * bộ nhớ: sẽ theo dõi các giá trị trước đó và sẽ gọi bất kỳ cuộc gọi lại nào được thêm vào
 * sau khi danh sách được kích hoạt ngay với "được ghi nhớ" mới nhất
 * giá trị (như Trì hoãn)
 *
 * duy nhất: sẽ đảm bảo cuộc gọi lại chỉ có thể được thêm một lần (không trùng lặp trong danh sách)
 *
 * stopOnFalse: ngắt cuộc gọi khi cuộc gọi lại trả về sai
 *
 */
jQuery.Callbacks = hàm (tùy chọn) {

	// Chuyển đổi các tùy chọn từ định dạng chuỗi sang định dạng đối tượng nếu cần
	// (chúng tôi kiểm tra bộ đệm trước)
	tùy chọn = tùy chọn loại === "chuỗi"?
		createOptions(tùy chọn):
		jQuery.extend( {}, options );

	var // Gắn cờ để biết danh sách có đang hoạt động hay không
		bắn,

		// Giá trị lần cháy cuối cùng cho danh sách không thể quên
		ký ức,

		// Gắn cờ để biết danh sách đã được kích hoạt chưa
		Bị sa thải,

		// Gắn cờ để ngăn kích hoạt
		bị khóa,

		// Danh sách gọi lại thực tế
		danh sách = [],

		// Hàng đợi dữ liệu thực thi cho danh sách lặp lại
		hàng đợi = [],

		// Chỉ mục của cuộc gọi lại hiện đang thực hiện (được sửa đổi bằng cách thêm/xóa nếu cần)
		chỉ số bắn = -1,

		// Gọi lại cuộc gọi
		lửa = hàm() {

			// Thực thi bắn đơn
			bị khóa = bị khóa || tùy chọn.một lần;

			// Thực thi lệnh gọi lại cho tất cả các lần thực thi đang chờ xử lý,
			// tôn trọng ghi đè FireIndex và thay đổi thời gian chạy
			đã bắn = bắn = đúng;
			cho ( ; queue.length; FireIndex = -1 ) {
				bộ nhớ = queue.shift();
				while ( ++firesIndex < list.length ) {

					// Chạy gọi lại và kiểm tra việc kết thúc sớm
					if ( list[ FireIndex ].apply( bộ nhớ[ 0 ], bộ nhớ[ 1 ] ) === false &&
						tùy chọn.stopOnFalse ) {

						// Nhảy tới cuối và quên dữ liệu để .add không kích hoạt lại
						bắnIndex = list.length;
						bộ nhớ = sai;
					}
				}
			}

			// Quên dữ liệu đi nếu chúng ta đã làm xong nó
			if ( !options.memory ) {
				bộ nhớ = sai;
			}

			bắn = sai;

			// Dọn dẹp nếu chúng ta đã bắn xong
			nếu ( bị khóa ) {

				// Giữ một danh sách trống nếu chúng tôi có dữ liệu cho các cuộc gọi thêm trong tương lai
				nếu ( bộ nhớ ) {
					danh sách = [];

				// Ngược lại, đối tượng này sẽ được sử dụng
				} khác {
					danh sách = "";
				}
			}
		},

		// Đối tượng gọi lại thực tế
		bản thân = {

			// Thêm một lệnh gọi lại hoặc tập hợp các lệnh gọi lại vào danh sách
			thêm: hàm() {
				nếu ( danh sách ) {

					// Nếu chúng ta có bộ nhớ từ lần chạy trước, chúng ta sẽ kích hoạt sau khi thêm
					if ( bộ nhớ && ! kích hoạt ) {
						bắnIndex = list.length - 1;
						queue.push(bộ nhớ);
					}

					( hàm thêm( args ) {
						jQuery.each(args, function( _, arg ) {
							nếu ( isFunction(arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push(arg);
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Kiểm tra đệ quy
								thêm( đối số );
							}
						} );
					} )( tranh luận );

					if ( bộ nhớ && ! kích hoạt ) {
						ngọn lửa();
					}
				}
				trả lại cái này;
			},

			// Xóa một cuộc gọi lại khỏi danh sách
			xóa: hàm() {
				jQuery.each( đối số, hàm( _, arg ) {
					chỉ số var;
					while ( (index = jQuery.inArray(arg, list, index ) ) > -1 ) {
						list.splice(chỉ mục, 1);

						// Xử lý các chỉ mục kích hoạt
						if (chỉ mục <= FireIndex ) {
							bắnIndex--;
						}
					}
				} );
				trả lại cái này;
			},

			// Kiểm tra xem một cuộc gọi lại đã cho có trong danh sách hay không.
			// Nếu không có đối số nào được đưa ra, hãy trả về xem danh sách có đính kèm lệnh gọi lại hay không.
			có: hàm( fn ) {
				trả lại fn?
					jQuery.inArray( fn, list ) > -1 :
					danh sách.length > 0;
			},

			// Xóa tất cả các cuộc gọi lại khỏi danh sách
			trống: hàm() {
				nếu ( danh sách ) {
					danh sách = [];
				}
				trả lại cái này;
			},

			// Tắt .fire và .add
			// Hủy bỏ mọi thực thi hiện tại/đang chờ xử lý
			// Xóa tất cả các cuộc gọi lại và giá trị
			vô hiệu hóa: hàm() {
				bị khóa = hàng đợi = [];
				danh sách = bộ nhớ = "";
				trả lại cái này;
			},
			bị vô hiệu hóa: hàm() {
				return !list;
			},

			// Tắt .fire
			// Đồng thời tắt .add trừ khi chúng ta có bộ nhớ (vì nó sẽ không có tác dụng)
			// Hủy bỏ mọi thực thi đang chờ xử lý
			khóa: hàm() {
				bị khóa = hàng đợi = [];
				if ( !memory && !firing ) {
					danh sách = bộ nhớ = "";
				}
				trả lại cái này;
			},
			đã khóa: hàm() {
				trở lại!!bị khóa;
			},

			// Gọi tất cả các lệnh gọi lại với bối cảnh và đối số đã cho
			fireWith: function(bối cảnh, args) {
				nếu ( !đã khóa ) {
					tranh luận = tranh luận || [];
					args = [ bối cảnh, args.slice ? args.slice() : args ];
					queue.push(args);
					nếu ( ! kích hoạt ) {
						ngọn lửa();
					}
				}
				trả lại cái này;
			},

			// Gọi tất cả các lệnh gọi lại với các đối số đã cho
			lửa: hàm() {
				self.fireWith(cái này, đối số);
				trả lại cái này;
			},

			// Để biết các cuộc gọi lại đã được gọi ít nhất một lần chưa
			đã sa thải: hàm() {
				quay trở lại!!đã sa thải;
			}
		};

	trở về chính mình;
};


hàm Nhận dạng( v ) {
	trả lại v;
}
hàm Người ném( ví dụ ) {
	ném cũ;
}

hàm thông quaValue(giá trị, giải quyết, từ chối, noValue ) {
	phương pháp var;

	thử {

		// Kiểm tra khía cạnh lời hứa trước tiên đối với hành vi đồng bộ đặc quyền
		if ( value && isFunction( ( Method = value.promise ) ) ) {
			phương thức.call( value ).done( giải quyết ).fail( từ chối);

		// Các tiện ích khác
		} else if ( value && isFunction( ( Method = value.then ) ) ) {
			Method.call(giá trị, giải quyết, từ chối);

		// Những thứ không thể dùng được khác
		} khác {

			// Kiểm soát các đối số `giải quyết` bằng cách cho phép Array#slice ép kiểu boolean `noValue` thành số nguyên:
			// * false: [ value ].slice( 0 ) => giải quyết( value )
			// * true: [ value ].slice( 1 ) => giải quyết()
			giải quyết.apply( không xác định, [ value ].slice( noValue ) );
		}

	// Đối với Promises/A+, chuyển đổi ngoại lệ thành từ chối
	// Vì jQuery.when không mở được các thenables nên chúng ta có thể bỏ qua các bước kiểm tra bổ sung xuất hiện trong
	// Trì hoãn#then để ngăn chặn việc từ chối có điều kiện.
	} bắt ( giá trị ) {

		// Hỗ trợ: Chỉ Android 4.0
		// Các hàm ở chế độ nghiêm ngặt được gọi mà không cần .call/.apply lấy bối cảnh đối tượng toàn cục
		từ chối.apply( không xác định, [ value ] );
	}
}

jQuery.extend( {

	Trì hoãn: function( func ) {
		bộ dữ liệu var = [

				// hành động, thêm người nghe, gọi lại,
				// ... .then trình xử lý, chỉ mục đối số, [trạng thái cuối cùng]
				[ "thông báo", "tiến trình", jQuery.Callbacks( "bộ nhớ" ),
					jQuery.Callbacks("bộ nhớ"), 2],
				[ "giải quyết", "xong", jQuery.Callbacks ("bộ nhớ một lần"),
					jQuery.Callbacks( "bộ nhớ một lần"), 0, "đã giải quyết"],
				[ "từ chối", "thất bại", jQuery.Callbacks ("bộ nhớ một lần"),
					jQuery.Callbacks("bộ nhớ một lần"), 1, "bị từ chối" ]
			],
			trạng thái = "đang chờ xử lý",
			hứa = {
				chức vụ Tiểu bang() {
					trạng thái trả về;
				},
				luôn luôn: hàm() {
					deferred.done( đối số ).fail( đối số );
					trả lại cái này;
				},
				"bắt": hàm( fn ) {
					trả lại lời hứa.then( null, fn);
				},

				// Giữ pipe để tương thích ngược
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = đối số;

					trả về jQuery.Deferred(hàm(newDefer) {
						jQuery.each( bộ dữ liệu, hàm( _i, bộ dữ liệu ) {

							// Ánh xạ các bộ dữ liệu (tiến trình, xong, thất bại) tới các đối số (hoàn thành, thất bại, tiến trình)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { liên kết với newDefer hoặc newDefer.notify })
							// deferred.done(function() { liên kết với newDefer hoặc newDefer.resolve })
							// deferred.fail(function() { liên kết với newDefer hoặc newDefer.reject })
							hoãn lại [ tuple [ 1 ] ]( function() {
								var return = fn && fn.apply( this, đối số );
								if ( trả về && isFunction( return.promise ) ) {
									trả lại.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} khác {
									newDefer[ bộ [ 0 ] + "Với" ](
										cái này,
										fn ? [trả về]: đối số
									);
								}
							} );
						} );
						fns = null;
					} ).hứa();
				},
				sau đó: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					hàm giải quyết (độ sâu, trì hoãn, trình xử lý, đặc biệt) {
						hàm trả về() {
							var cái đó = cái này,
								args = đối số,
								mayThrow = hàm() {
									thì var đã trả về;

									// Hỗ trợ: Promises/A+ phần 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Bỏ qua các nỗ lực phân giải kép
									nếu (độ sâu < maxDepth) {
										trở lại;
									}

									return = handler.apply( that, args );

									// Hỗ trợ: Promises/A+ phần 2.3.1
									// https://promisesaplus.com/#point-48
									if ( trả về === deferred.promise() ) {
										ném TypeError mới ("Có thể tự phân giải");
									}

									// Hỗ trợ: Promises/A+ phần 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Truy xuất `then` chỉ một lần
									sau đó = trả lại &&

										// Hỗ trợ: Promises/A+ phần 2.3.4
										// https://promisesaplus.com/#point-64
										// Chỉ kiểm tra tính khả dụng của các đối tượng và hàm
										( typeof trả về === "object" ||
											typeof trả về === "hàm" ) &&
										return.then;

									// Xử lý một giá trị có thể trả về
									nếu ( isFunction( thì ) ) {

										// Bộ xử lý đặc biệt (thông báo) chỉ chờ giải quyết
										nếu ( đặc biệt ) {
											sau đó gọi(
												trả lại,
												giải quyết (maxDepth, hoãn lại, Danh tính, đặc biệt),
												giải quyết (maxDepth, hoãn lại, Người ném, đặc biệt)
											);

										// Bộ xử lý thông thường (giải quyết) cũng tham gia vào tiến trình
										} khác {

											// ...và bỏ qua các giá trị độ phân giải cũ hơn
											maxDepth++;

											sau đó gọi(
												trả lại,
												giải quyết (maxDepth, hoãn lại, Danh tính, đặc biệt),
												giải quyết (maxDepth, hoãn lại, Thrower, đặc biệt),
												giải quyết (maxDepth, hoãn lại, Danh tính,
													hoãn lại.notifyWith )
											);
										}

									// Xử lý tất cả các giá trị trả về khác
									} khác {

										// Chỉ các trình xử lý thay thế mới truyền ngữ cảnh
										// và nhiều giá trị (hành vi không đặc tả)
										if ( xử lý !== Danh tính ) {
											đó = không xác định;
											args = [ trả về ];
										}

										// Xử lý (các) giá trị
										// Quá trình mặc định được giải quyết
										( đặc biệt || deferred.resolveWith )( that, args );
									}
								},

								// Chỉ các bộ xử lý bình thường (giải quyết) mới bắt và từ chối các ngoại lệ
								quá trình = đặc biệt?
									có thểThrow:
									chức năng() {
										thử {
											có thểThrow();
										} bắt ( e ) {

											if ( jQuery.Deferred.ExceptionHook ) {
												jQuery.Deferred.ExceptionHook(e,
													quá trình.error );
											}

											// Hỗ trợ: Promises/A+ phần 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Bỏ qua các ngoại lệ sau khi phân giải
											nếu (độ sâu + 1 >= maxDepth) {

												// Chỉ các trình xử lý thay thế mới truyền ngữ cảnh
												// và nhiều giá trị (hành vi không đặc tả)
												if ( handler !== Thrower ) {
													đó = không xác định;
													đối số = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Hỗ trợ: Promises/A+ phần 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Giải quyết lại lời hứa ngay lập tức để tránh bị từ chối sai từ
							// các lỗi tiếp theo
							nếu ( độ sâu ) {
								quá trình();
							} khác {

								// Gọi một hook tùy chọn để ghi lại lỗi, trong trường hợp có ngoại lệ
								// vì nếu không thì nó sẽ bị mất khi quá trình thực thi không đồng bộ
								nếu ( jQuery.Deferred.getErrorHook ) {
									process.error = jQuery.Deferred.getErrorHook();

								// Bí danh không được dùng nữa ở trên. Trong khi cái tên gợi ý
								// trả về ngăn xếp, không phải lỗi, jQuery chỉ chuyển
								// nó trực tiếp đến `console.warn` để cả hai đều hoạt động; một ví dụ
								// chỉ cần hợp tác tốt hơn với bản đồ nguồn.
								} khác nếu ( jQuery.Deferred.getStackHook ) {
									process.error = jQuery.Deferred.getStackHook();
								}
								window.setTimeout(process);
							}
						};
					}

					trả về jQuery.Deferred(hàm(newDefer) {

						// Progress_handlers.add( ... )
						bộ dữ liệu[ 0 ][ 3 ].add(
							giải quyết(
								0,
								mới Trì hoãn,
								isFunction(onProgress)?
									onProgress :
									Danh tính,
								newDefer.notifyWith
							)
						);

						// hoàn thành_handlers.add( ... )
						bộ dữ liệu[ 1 ][ 3 ].add(
							giải quyết(
								0,
								mới Trì hoãn,
								isFunction(onFulfilled)?
									trênFulfill :
									Danh tính
							)
						);

						// bị từ chối_handlers.add( ... )
						bộ dữ liệu[ 2 ][ 3 ].add(
							giải quyết(
								0,
								mới Trì hoãn,
								isFunction(onRejected)?
									onRejected :
									Người giao cầu
							)
						);
					} ).hứa();
				},

				// Nhận một lời hứa cho việc trì hoãn này
				// Nếu obj được cung cấp, khía cạnh lời hứa sẽ được thêm vào đối tượng
				lời hứa: hàm( obj ) {
					trả về obj != null ? jQuery.extend( obj, Promise ): lời hứa;
				}
			},
			hoãn lại = {};

		// Thêm các phương thức dành riêng cho danh sách
		jQuery.each( bộ dữ liệu, hàm( i, bộ dữ liệu ) {
			danh sách var = bộ dữ liệu [ 2 ],
				stateString = bộ [ 5 ];

			// lời hứa.progress = list.add
			// Promise.done = list.add
			// lời hứa.fail = list.add
			lời hứa [ tuple [ 1 ] ] = list.add;

			// Trạng thái xử lý
			nếu ( stateString ) {
				danh sách.add(
					chức năng() {

						// state = "đã giải quyết" (tức là đã hoàn thành)
						// trạng thái = "bị từ chối"
						trạng thái = stateString;
					},

					// bị từ chối_callbacks.disable
					// hoàn thành_callbacks.disable
					bộ dữ liệu [ 3 - i ][ 2 ].vô hiệu hóa,

					// bị từ chối_handlers.disable
					// hoàn thành_handlers.disable
					bộ dữ liệu [ 3 - i ][ 3 ].vô hiệu hóa,

					// Progress_callbacks.lock
					bộ dữ liệu[ 0 ][ 2 ].lock,

					// tiến_handlers.lock
					bộ dữ liệu[ 0 ][ 3 ].lock
				);
			}

			// Progress_handlers.fire
			// hoàn thành_handlers.fire
			// bị từ chối_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			hoãn lại [ tuple [ 0 ] ] = function() {
				hoãn lại [ tuple [ 0 ] + "Với" ]( cái này === hoãn lại ? không xác định : cái này, đối số );
				trả lại cái này;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			hoãn lại [ tuple [ 0 ] + "Với" ] = list.fireWith;
		} );

		// Thực hiện lời hứa trì hoãn
		lời hứa.promise(hoãn lại);

		// Gọi hàm đã cho nếu có
		nếu ( func ) {
			func.call(hoãn lại, hoãn lại);
		}

		// Tất cả đã được làm xong!
		trả lại hoãn lại;
	},

	// Người trợ giúp bị trì hoãn
	khi nào: hàm(singleValue) {
		var

			// đếm số cấp dưới chưa hoàn thành
			còn lại = đối số.length,

			// đếm các đối số chưa được xử lý
			tôi = còn lại,

			// dữ liệu thực hiện cấp dưới
			giải quyếtContexts = Mảng(i),
			giải quyếtValues ​​= slice.call( đối số),

			// Trì hoãn chính
			chính = jQuery.Deferred(),

			// nhà máy gọi lại cấp dưới
			updateFunc = hàm(i ) {
				hàm trả về(giá trị) {
					giải quyếtContexts[i] = cái này;
					giải quyếtValues ​​​​[i] = đối số.length> 1? slice.call(arguments): giá trị;
					nếu ( !( --remaining ) ) {
						sơ cấp.resolveWith(resolveContexts, ResolveValues);
					}
				};
			};

		// Các đối số đơn và trống được sử dụng như Promise.resolve
		nếu ( còn lại <= 1 ) {
			AdoptValue(singleValue, Primary.done(updateFunc(i ) ).resolve, Primary.reject,
				!còn lại );

			// Sử dụng .then() để mở gói các thiết bị phụ thứ cấp (cf. gh-3000)
			if ( Primary.state() === "đang chờ xử lý" ||
				isFunction( ResolveValues[ i ] && ResolveValues[ i ].then ) ) {

				trả về chính.then();
			}
		}

		// Nhiều đối số được tổng hợp giống như các phần tử mảng Promise.all
		trong khi tôi-- ) {
			AdoptValue( ResolveValues[ i ], updateFunc( i ), Primary.reject );
		}

		trả về chính.promise();
	}
} );


// Những điều này thường chỉ ra lỗi của lập trình viên trong quá trình phát triển,
// cảnh báo về chúng càng sớm càng tốt thay vì nuốt chửng chúng theo mặc định.
var rerrorNames = /^(Eval|Internal|Range|Reference|Cú pháp|Loại|URI)Error$/;

// Nếu `jQuery.Deferred.getErrorHook` được xác định, `asyncError` là một lỗi
// được bắt trước hàng rào async để lấy nguyên nhân lỗi ban đầu
// có thể bị ẩn.
jQuery.Deferred.ExceptionHook = function( error, asyncError ) {

	// Hỗ trợ: Chỉ IE 8 - 9
	// Console tồn tại khi công cụ dev đang mở, điều này có thể xảy ra bất cứ lúc nào
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "Ngoại lệ jQuery.Deferred: " + error.message,
			error.stack, asyncError );
	}
};




jQuery.readyException = hàm(lỗi) {
	window.setTimeout(hàm() {
		lỗi ném;
	} );
};




// Trì hoãn được sử dụng trên DOM đã sẵn sàng
varreadyList = jQuery.Deferred();

jQuery.fn.ready = hàm( fn ) {

	danh sách sẵn sàng
		.then( fn )

		// Gói jQuery.readyException vào một hàm để tra cứu
		// xảy ra tại thời điểm xử lý lỗi thay vì gọi lại
		// sự đăng ký.
		.catch(hàm(lỗi) {
			jQuery.readyException(lỗi);
		} );

	trả lại cái này;
};

jQuery.extend( {

	// DOM đã sẵn sàng để sử dụng chưa? Đặt thành true khi nó xảy ra.
	isReady: sai,

	// Một bộ đếm để theo dõi xem có bao nhiêu mục phải chờ trước đó
	// sự kiện sẵn sàng kích hoạt. Xem trac-6781
	sẵn sàngĐợi: 1,

	// Xử lý khi DOM sẵn sàng
	sẵn sàng: chức năng (đợi) {

		// Hủy bỏ nếu có khoản giữ đang chờ xử lý hoặc chúng tôi đã sẵn sàng
		if ( chờ === đúng ? --jQuery.readyWait : jQuery.isReady ) {
			trở lại;
		}

		// Hãy nhớ rằng DOM đã sẵn sàng
		jQuery.isReady = true;

		// Nếu một sự kiện DOM Ready bình thường được kích hoạt, hãy giảm dần và đợi nếu cần
		if ( chờ đã !== true && --jQuery.readyWait > 0 ) {
			trở lại;
		}

		// Nếu có hàm bị ràng buộc, để thực thi
		ReadyList.resolveWith(tài liệu, [ jQuery ] );
	}
} );

jQuery.ready.then = ReadyList.then;

// Trình xử lý sự kiện sẵn sàng và phương thức tự dọn dẹp
hàm đã hoàn thành() {
	document.removeEventListener ("DOMContentLoaded", đã hoàn thành);
	window.removeEventListener ("tải", đã hoàn thành);
	jQuery.ready();
}

// Bắt các trường hợp trong đó $(document).ready() được gọi
// sau khi sự kiện trình duyệt đã xảy ra.
// Hỗ trợ: IE <=9 - 10 thôi
// IE cũ hơn đôi khi báo hiệu "tương tác" quá sớm
if ( document.readyState === "hoàn thành" ||
	( document.readyState !== "đang tải" && !document.documentElement.doScroll ) ) {

	// Xử lý nó một cách không đồng bộ để cho phép các tập lệnh có cơ hội trì hoãn sẵn sàng
	window.setTimeout( jQuery.ready );

} khác {

	// Sử dụng hàm gọi lại sự kiện tiện dụng
	document.addEventListener ("DOMContentLoaded", đã hoàn thành);

	// Dự phòng cho window.onload, nó sẽ luôn hoạt động
	window.addEventListener ("tải", đã hoàn thành);
}




// Phương thức đa chức năng để lấy và đặt giá trị của một tập hợp
// Giá trị/s có thể được thực thi tùy ý nếu đó là một hàm
var access = function( elems, fn, key, value, chainable, EmptyGet, raw ) {
	var i = 0,
		len = elems.length,
		số lượng lớn = khóa == null;

	// Đặt nhiều giá trị
	if ( toType( key ) === "object" ) {
		có thể xâu chuỗi = đúng;
		cho ( tôi ở chìa khóa ) {
			truy cập( elems, fn, i, key[ i ], true, EmptyGet, raw );
		}

	// Đặt một giá trị
	} khác nếu ( giá trị !== không xác định ) {
		có thể xâu chuỗi = đúng;

		if ( !isFunction(value ) ) {
			thô = đúng;
		}

		nếu ( số lượng lớn ) {

			// Các thao tác hàng loạt chạy trên toàn bộ tập hợp
			nếu ( nguyên ) {
				fn.call(elems, value);
				fn = null;

			// ...ngoại trừ khi thực thi các giá trị hàm
			} khác {
				số lượng lớn = fn;
				fn = hàm( elem, _key, value ) {
					trả về số lượng lớn.call( jQuery( elem ), value );
				};
			}
		}

		nếu ( fn ) {
			cho ( ; tôi < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						giá trị :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( có thể xâu chuỗi ) {
		trả lại các phần tử;
	}

	// Được
	nếu ( số lượng lớn ) {
		return fn.call(elems);
	}

	trả lại len? fn( elems[ 0 ], key ): trốngGet;
};


// So khớp với chuỗi nét đứt để tạo lạc đà
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([az])/g;

// Được sử dụng bởi CamelCase để gọi lại thay thế()
hàm fcamelCase(_all, letter ) {
	thư trả lại.toUpperCase();
}

// Chuyển đổi nét đứt sang CamelCase; được sử dụng bởi các mô-đun css và dữ liệu
// Hỗ trợ: IE <=9 - 11, Edge 12 - 15
// Microsoft quên thêm tiền tố nhà cung cấp của họ (trac-9572)
hàm CamelCase(chuỗi) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var AcceptData = function( owner ) {

	// Chỉ chấp nhận:
	// - Nút
	// - Node.ELEMENT_NODE
	// - Node.DOCUMENT_NODE
	// - Sự vật
	// - Bất kì
	trả về owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




hàm dữ liệu() {
	this.expando = jQuery.expando + Data.uid++;
}

Dữ liệu.uid = 1;

Dữ liệu.prototype = {

	bộ đệm: hàm (chủ sở hữu) {

		// Kiểm tra xem đối tượng chủ sở hữu đã có bộ đệm chưa
		giá trị var = chủ sở hữu [ this.expando ];

		// Nếu không, hãy tạo một cái
		nếu ( !giá trị ) {
			giá trị = {};

			// Chúng tôi có thể chấp nhận dữ liệu cho các nút không phải phần tử trong các trình duyệt hiện đại,
			// nhưng chúng ta không nên, xem trac-8335.
			// Luôn trả về một đối tượng trống.
			nếu (chấp nhậnData( chủ sở hữu) ) {

				// Nếu đó là một nút không có khả năng được xâu chuỗi hoặc lặp lại
				// sử dụng phép gán đơn giản
				if ( owner.nodeType ) {
					chủ sở hữu [ this.expando ] = giá trị;

				// Nếu không thì bảo mật nó trong một thuộc tính không thể đếm được
				// có thể định cấu hình phải đúng để cho phép thuộc tính
				// xóa khi dữ liệu bị xóa
				} khác {
					Object.defineProperty(chủ sở hữu, this.expando, {
						giá trị: giá trị,
						có thể cấu hình: đúng
					} );
				}
			}
		}

		giá trị trả về;
	},
	set: function(chủ sở hữu, dữ liệu, giá trị) {
		var chống đỡ,
			bộ đệm = this.cache( chủ sở hữu);

		// Xử lý: [ owner, key, value ] args
		// Luôn sử dụng khóa CamelCase (gh-2257)
		if (loại dữ liệu === "chuỗi" ) {
			bộ đệm [ lạc đàCase( dữ liệu ) ] = giá trị;

		// Xử lý: [ chủ sở hữu, { thuộc tính } ] args
		} khác {

			// Sao chép từng thuộc tính vào đối tượng bộ đệm
			for ( chống đỡ trong dữ liệu ) {
				bộ đệm [ CamelCase( prop ) ] = dữ liệu [ prop ];
			}
		}
		trả lại bộ đệm;
	},
	lấy: hàm (chủ sở hữu, khóa) {
		khóa trả về === không xác định?
			this.cache( chủ sở hữu):

			// Luôn sử dụng khóa CamelCase (gh-2257)
			chủ sở hữu [ this.expando ] && chủ sở hữu [ this.expando ][ CamelCase( key ) ];
	},
	truy cập: hàm (chủ sở hữu, khóa, giá trị) {

		// Trong trường hợp:
		//
		// 1. Không có khóa nào được chỉ định
		// 2. Một khóa chuỗi đã được chỉ định nhưng không có giá trị nào được cung cấp
		//
		// Đi theo đường dẫn "đọc" và cho phép phương thức get xác định
		// giá trị nào sẽ được trả về tương ứng:
		//
		// 1. Toàn bộ đối tượng bộ đệm
		// 2. Dữ liệu được lưu trữ tại key
		//
		nếu (khóa === không xác định ||
				( ( key && typeof key === "string" ) && value === không xác định ) ) {

			trả lại this.get( chủ sở hữu, khóa);
		}

		// Khi khóa không phải là chuỗi hoặc vừa là khóa vừa là giá trị
		// được chỉ định, đặt hoặc mở rộng (các đối tượng hiện có) bằng:
		//
		// 1. Một đối tượng thuộc tính
		// 2. Một khóa và một giá trị
		//
		this.set( chủ sở hữu, khóa, giá trị);

		// Vì đường dẫn "set" có thể có hai điểm vào
		// trả về dữ liệu dự kiến ​​dựa trên đường dẫn đã đi[*]
		giá trị trả về !== không xác định? giá trị: khóa;
	},
	xóa: hàm (chủ sở hữu, khóa) {
		tôi,
			bộ đệm = chủ sở hữu [ this.expando ];

		if (bộ đệm === không xác định) {
			trở lại;
		}

		if ( key !== không xác định ) {

			// Hỗ trợ mảng hoặc chuỗi khóa được phân tách bằng dấu cách
			if ( Array.isArray( key ) ) {

				// Nếu khóa là một mảng khóa...
				// Chúng tôi luôn đặt khóa CamelCase, vì vậy hãy xóa khóa đó.
				key = key.map( CamelCase );
			} khác {
				key = CamelCase(key );

				// Nếu tồn tại một khóa có khoảng trắng, hãy sử dụng nó.
				// Ngược lại, tạo một mảng bằng cách khớp không phải khoảng trắng
				key = khóa trong bộ đệm?
					[ chìa khóa ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			trong khi tôi-- ) {
				xóa bộ nhớ đệm[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (trac-14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (trac-11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (trac-14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (trac-13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (trac-13208)
				// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", true );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, isSetup ) {

	// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
	if ( !isSetup ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				if ( !saved ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					this[ type ]();
					result = dataPriv.get( this, type );
					dataPriv.set( this, type, false );

					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						return result;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering
				// the native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved ) {

				// ...and capture the result
				dataPriv.set( this, type, jQuery.event.trigger(
					saved[ 0 ],
					saved.slice( 1 ),
					this
				) );

				// Abort handling of the native event by all jQuery handlers while allowing
				// native handlers on the same element to run. On target, this is achieved
				// by stopping immediate propagation just on the jQuery event. However,
				// the native event is re-wrapped by a jQuery one on each level of the
				// propagation so the only way to stop it for jQuery is to stop it for
				// everyone via native `stopPropagation()`. This is not a problem for
				// focus/blur which don't bubble, but it does also stop click on checkboxes
				// and radios. We accept this limitation.
				event.stopPropagation();
				event.isImmediatePropagationStopped = returnTrue;
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {

	function focusMappedHandler( nativeEvent ) {
		if ( document.documentMode ) {

			// Support: IE 11+
			// Attach a single focusin/focusout handler on the document while someone wants
			// focus/blur. This is because the former are synchronous in IE while the latter
			// are async. In other browsers, all those handlers are invoked synchronously.

			// `handle` from private data would already wrap the event, but we need
			// to change the `type` here.
			var handle = dataPriv.get( this, "handle" ),
				event = jQuery.event.fix( nativeEvent );
			event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
			event.isSimulated = true;

			// First, handle focusin/focusout
			handle( nativeEvent );

			// ...then, handle focus/blur
			//
			// focus/blur don't bubble while focusin/focusout do; simulate the former by only
			// invoking the handler at the lower level.
			if ( event.target === event.currentTarget ) {

				// The setup part calls `leverageNative`, which, in turn, calls
				// `jQuery.event.add`, so event handle will already have been set
				// by this point.
				handle( event );
			}
		} else {

			// For non-IE browsers, attach a single capturing handler on the document
			// while someone wants focusin/focusout.
			jQuery.event.simulate( delegateType, nativeEvent.target,
				jQuery.event.fix( nativeEvent ) );
		}
	}

	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			var attaches;

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, true );

			if ( document.documentMode ) {

				// Support: IE 9 - 11+
				// We use the same native handler for focusin & focus (and focusout & blur)
				// so we need to coordinate setup & teardown parts between those events.
				// Use `delegateType` as the key as `type` is already used by `leverageNative`.
				attaches = dataPriv.get( this, delegateType );
				if ( !attaches ) {
					this.addEventListener( delegateType, focusMappedHandler );
				}
				dataPriv.set( this, delegateType, ( attaches || 0 ) + 1 );
			} else {

				// Return false to allow normal processing in the caller
				return false;
			}
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		teardown: function() {
			var attaches;

			if ( document.documentMode ) {
				attaches = dataPriv.get( this, delegateType ) - 1;
				if ( !attaches ) {
					this.removeEventListener( delegateType, focusMappedHandler );
					dataPriv.remove( this, delegateType );
				} else {
					dataPriv.set( this, delegateType, attaches );
				}
			} else {

				// Return false to indicate standard teardown should be applied
				return false;
			}
		},

		// Suppress native focus or blur if we're currently inside
		// a leveraged native-event stack
		_default: function( event ) {
			return dataPriv.get( event.target, type );
		},

		delegateType: delegateType
	};

	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	//
	// Support: IE 9 - 11+
	// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
	// attach a single handler for both events in IE.
	jQuery.event.special[ delegateType ] = {
		setup: function() {

			// Handle: regular nodes (via `this.ownerDocument`), window
			// (via `this.document`) & document (via `this`).
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType );

			// Support: IE 9 - 11+
			// We use the same native handler for focusin & focus (and focusout & blur)
			// so we need to coordinate setup & teardown parts between those events.
			// Use `delegateType` as the key as `type` is already used by `leverageNative`.
			if ( !attaches ) {
				if ( document.documentMode ) {
					this.addEventListener( delegateType, focusMappedHandler );
				} else {
					doc.addEventListener( type, focusMappedHandler, true );
				}
			}
			dataPriv.set( dataHolder, delegateType, ( attaches || 0 ) + 1 );
		},
		teardown: function() {
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType ) - 1;

			if ( !attaches ) {
				if ( document.documentMode ) {
					this.removeEventListener( delegateType, focusMappedHandler );
				} else {
					doc.removeEventListener( type, focusMappedHandler, true );
				}
				dataPriv.remove( dataHolder, delegateType );
			} else {
				dataPriv.set( dataHolder, delegateType, attaches );
			}
		}
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (trac-8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Re-enable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {

							// Unwrap a CDATA section containing script contents. This shouldn't be
							// needed as in XML documents they're already not visible when
							// inspecting element contents and in HTML documents they have no
							// meaning but we're preserving that logic for backwards compatibility.
							// This will be removed completely in 4.0. See gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew jQuery#find here for performance reasons:
			// https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "box-sizing:content-box;border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is `display: block`
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( name ),

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, trac-12537)
	//   .css('--customProperty) (gh-3144)
	if ( computed ) {

		// Support: IE <=9 - 11+
		// IE only supports `"float"` in `getPropertyValue`; in computed styles
		// it's only available as `"cssFloat"`. We no longer modify properties
		// sent to `.css()` apart from camelCasing, so we need to check both.
		// Normally, this would create difference in behavior: if
		// `getPropertyValue` returns an empty string, the value returned
		// by `.css()` would be `undefined`. This is usually the case for
		// disconnected elements. However, in IE even disconnected elements
		// with no styles return `"none"` for `getPropertyValue( "float" )`
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( isCustomProp && ret ) {

			// Support: Firefox 105+, Chrome <=105+
			// Spec requires trimming whitespace for custom properties (gh-4926).
			// Firefox only trims leading whitespace. Chrome just collapses
			// both leading & trailing whitespace to a single space.
			//
			// Fall back to `undefined` if empty string returned.
			// This collapses a missing definition with property defined
			// and set to an empty string but there's no standard API
			// allowing us to differentiate them without a performance penalty
			// and returning `undefined` aligns with older jQuery.
			//
			// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
			// as whitespace while CSS does not, but this is not a problem
			// because CSS preprocessing replaces them with U+000A LINE FEED
			// (which *is* CSS whitespace)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" ) || undefined;
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0,
		marginDelta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		// Count margin delta separately to only add it after scroll gutter adjustment.
		// This is needed to make negative margins work with `outerHeight( true )` (gh-3982).
		if ( box === "margin" ) {
			marginDelta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta + marginDelta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		animationIterationCount: true,
		aspectRatio: true,
		borderImageSlice: true,
		columnCount: true,
		flexGrow: true,
		flexShrink: true,
		fontWeight: true,
		gridArea: true,
		gridColumn: true,
		gridColumnEnd: true,
		gridColumnStart: true,
		gridRow: true,
		gridRowEnd: true,
		gridRowStart: true,
		lineHeight: true,
		opacity: true,
		order: true,
		orphans: true,
		scale: true,
		widows: true,
		zIndex: true,
		zoom: true,

		// SVG-related
		fillOpacity: true,
		floodOpacity: true,
		stopOpacity: true,
		strokeMiterlimit: true,
		strokeOpacity: true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug trac-9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (trac-7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this
			.on( "mouseenter", fnOver )
			.on( "mouseleave", fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );
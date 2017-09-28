Ext.apply(Ext,{
	cloneNode:function(node){
		var result = node.copy(),
		  len = node.childNodes ? node.childNodes.length : 0,
		  i;
		for (i = 0; i < len; i++){
			result.appendChild(this.cloneNode(node.childNodes[i]));
		}
		return result;
	},
	regEx:{
		isInt:/^\d+$/,
		isIntText:'数据类型不符合要求，应为整数',
		
		isNumber:/^[0-9]*\.?[0-9]*$/,
		isNumberText:'数据类型不符合要求，应为数字',

		login:/^\d+$/,
		loginText:'帐号格式有误，应为纯数字输入 示例：888888',
		
		password:/^(?=.*[0-9].*)(?=.*\W.*).{6,}|(?=.*[a-zA-Z].*)(?=.*\W.*).{6,}|(?=.*[a-zA-Z].*)(?=.*[0-9].*).{6,}$/,
		passwordText:'密码过于简单 应同时包含字母与数字（或符号）',
		
		mobile:/^0{0,1}(1[0-9])[0-9]{9}$/||/^(00852)\d{8}$/,
		mobileText:'手机格式错误，示例：18688886666',

		email:/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/,
		emailText:'Email格式错误，示例：name@domain.com'
	},
	//===================================================================================================判断是否包含中文
	isChinaese:function(value){
		var re=/.*[\u4e00-\u9fa5]+.*$/;
		if(!re.test(value)) return false;
		return true ;
	},
	
	//===================================================================================================明文TO二进制
	toBinary:function(data){
		//var data=Ext.util.JSON.encode(str);
		for (var B=[],q=0,p=data.length,m;q<p;q++){
			m = data.charCodeAt(q);
			if (m <= 0x7F) {
				B.push(m); // 1 byte
			} else if (m <= 0x7FF) {
				// 2 byte
				var B1 = 0, B2 = 0;
				B1 = 0xC0 | (m >>> 6);
				B2 = 0x80 | (m & 0x3F);
				B.push(B1, B2);
			} else if (m <= 0xFFFF) {
				// 3 byte
				var B1 = 0, B2 = 0, B3 = 0;
				B1 = 0xE0 | (m >>> 12);
				B2 = 0x80 | ((m & 0xFFF) >>> 6);
				B3 = 0x80 | (m & 0x3F);
				B.push(B1, B2, B3);
			} else {
				// 4 byte
				var B1 = 0, B2 = 0, B3 = 0, B4 = 0;
				B1 = 0xF0 | (m >>> 18);
				B2 = 0x80 | ((m & 0x3FFFF) >>> 12);
				B3 = 0x80 | ((m & 0xFFF) >>> 6);
				B4 = 0x80 | (m & 0x3F);
				B.push(B1, B2, B3, B4);
			}
		}
        //return (new Uint8Array(B)).buffer;
		return new DataView((new Uint8Array(B)).buffer).buffer
	},
	//===================================================================================================二进制TO明文
	fromBinary:function(binaryData,pos){
		if(binaryData instanceof ArrayBuffer){
			var pos=pos||0,
				dataView=new DataView(binaryData);
			for(var i=pos,a=0,p=[];i<(pos+dataView.byteLength);i++){
				a=dataView.getUint8(i,false);
				// console.log(a);
				if (a === 0)
					break;
				if (a > 0x7F) {
					var high = 0, low = 0;
					var l = a >> 4;
					if (l >= 12 && l < 14) {// 2 byte
		
					} else if (l == 14) { // 3 byte
						var h, m, n;
						h = a;
						m = dataView.getUint8(i += 1,false);
						n = dataView.getUint8(i += 1,false);
						high = ((h & 0xF) << 4) | ((m & 0x3F) >> 2);
						low = ((m & 0x3) << 6) | (n & 0x3F);
					} else {
						// 4 byte uncommon
					}
					a = high * 256 + low;
				}
				p.push(String.fromCharCode(a));
			}
			return p.join('');
		}else{
			return binaryData;
		}
	},
	getObjectURL:function(file){
		var url=null ; 
		if(window.createObjectURL!=undefined){
			url=window.createObjectURL(file);
		}else if(window.URL!=undefined){
			url=window.URL.createObjectURL(file) ;
		}else if(window.webkitURL!=undefined) { // webkit or chrome
			url=window.webkitURL.createObjectURL(file) ;
		}
		return url ; 
	},
	renderSVG:function(file,MaximgW,MaximgH,callback){
		var image=new Image();
		image.onload=function(){
			var canvas=document.createElement('canvas');
			if(image.width>image.height&&image.width>MaximgW){
				imageWidth=MaximgW;
				imageHeight=MaximgH*(image.height/image.width);
			}else if(image.width<image.height&&image.height>MaximgH){
				imageHeight=MaximgH;
				imageWidth=MaximgW*(image.width/image.height);
			}else{
				imageWidth=image.width;
				imageHeight=image.height;
			}
			canvas.width=imageWidth;
			canvas.height=imageHeight;
			var con=canvas.getContext('2d');
			con.clearRect(0,0,canvas.width,canvas.height);
			con.drawImage(image,0,0,imageWidth,imageHeight);
			base64=canvas.toDataURL(file.type,1);
			return callback(base64)
		}
		image.src=Ext.getObjectURL(file);
	}

});



























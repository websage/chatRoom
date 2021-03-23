var http = require('http');

//var spa = require('D:\\node\\node_modules\\superagent');
//var http = require('http');

var spa = require('C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\superagent');



function a(){
	setInterval(function () {spa
	.get("http://cart.mi.com/cart/add/2160100031")
	.query({jsonpcallback:'jQuery11130995856573805213_1453949234208',_:'1453949234209'})
	.set('Cookie','muuid=1451722291558_2635; xmuuid=XMGUEST-1E88EDE0-C038-11E5-A57F-292260E4EC20; qh[360]=1; mucid=12481.0001A100219138; muctm=; muctmr=; mutid=12481.0001l0dRF964opwNJYn55aef160129092900; AWSELB=717359E51ECF69FBB072CF5F1FD918BF783E0B6A30D7D8D2BAC0E7EA48A0A5080B85046D1E350DAF35F7DE31055F89C2E41D654AE4122C150E177EB7EDAF2DF8AB2BE9587D; xm_link_history=UMHKqCZ1EprNK0P6IhPIOn54%2BDoK1OlUa%2BsV9Zf%2FBS0%3D; xm_order_btauth=ff0fee403b51394afdf7ebe826683b1f; userId=172011891; XM_172011891_UN=.%E4%B8%B8%E5%AD%90; mudjc=12481.0001l0dRF964opwNJYn55aef160129092900; msttime=http%3A%2F%2Fitem.mi.com%2Fbuyphone%2Fhongmi2; msttime1=http%3A%2F%2Fitem.mi.com%2Fbuyphone%2Fhongmi2; lastsource=a.union.mi.com; mstz=766dbbdcc6eafc2c-f572de5474b4f279|%2F%2Fitem.mi.com%2Fbuyphone%2Fhongmi2|1108113993.13|pcpid|http%3A%2F%2Fwww.mi.com%2Fhongmi2%2F|http%3A%2F%2Fwww.mi.com%2F; mstuid=1453378297020_4069; xm_vistor=1453378297020_4069_1454030961064-1454031012660; xm_user_www_num=2')
	.end(function(res){
		console.log(res);
});},50);
//http://cart.mi.com/cart/add/1155000004-2142900032%7C2153900027%7C2142900027?jsonpcallback=jQuery11130607881473377347_1453959875380&_=1453959875383
!function () {spa
	.get("http://cart.mi.com/cart/add/1155000004-2142900032%7C2153900027%7C2142900027")
	.query({jsonpcallback:'jQuery11130607881473377347_1453959875380',_:'1453959875383'})
	.set('Cookie','muuid=1451722291558_2635; xmuuid=XMGUEST-1E88EDE0-C038-11E5-A57F-292260E4EC20; qh[360]=1; mucid=12481.0001A100219138; muctm=; muctmr=; mutid=12481.0001l0dRF964opwNJYn55aef160129092900; AWSELB=717359E51ECF69FBB072CF5F1FD918BF783E0B6A30D7D8D2BAC0E7EA48A0A5080B85046D1E350DAF35F7DE31055F89C2E41D654AE4122C150E177EB7EDAF2DF8AB2BE9587D; xm_link_history=UMHKqCZ1EprNK0P6IhPIOn54%2BDoK1OlUa%2BsV9Zf%2FBS0%3D; xm_order_btauth=ff0fee403b51394afdf7ebe826683b1f; userId=172011891; XM_172011891_UN=.%E4%B8%B8%E5%AD%90; mudjc=12481.0001l0dRF964opwNJYn55aef160129092900; msttime=http%3A%2F%2Fitem.mi.com%2Fbuyphone%2Fhongmi2; msttime1=http%3A%2F%2Fitem.mi.com%2Fbuyphone%2Fhongmi2; lastsource=a.union.mi.com; mstz=766dbbdcc6eafc2c-f572de5474b4f279|%2F%2Fitem.mi.com%2Fbuyphone%2Fhongmi2|1108113993.13|pcpid|http%3A%2F%2Fwww.mi.com%2Fhongmi2%2F|http%3A%2F%2Fwww.mi.com%2F; mstuid=1453378297020_4069; xm_vistor=1453378297020_4069_1454030961064-1454031012660; xm_user_www_num=2')
	.end(function(res){
		console.log('r');
});}();
}
//http://cart.mi.com/cart/add/2152700002?jsonpcallback=jQuery11130995856573805213_1453949234208&_=1453949234209

//http.createServer().listen(3000);

// setInterval(function () {spa
// 	.get("https://tpssl.hd.mi.com/gettimestamp")
// 	// .query({jsonpcallback:'jQuery11130995856573805213_1453949234208',_:'1453949234209'})
// 	.set('Cookie','muuid=1451722291558_2635; xmuuid=XMGUEST-1E88EDE0-C038-11E5-A57F-292260E4EC20; qh[360]=1; mucid=12481.0001A100219138; muctm=; muctmr=; mutid=12481.0001l0dRF964opwNJYn55aef160129092900; AWSELB=717359E51ECF69FBB072CF5F1FD918BF783E0B6A30D7D8D2BAC0E7EA48A0A5080B85046D1E350DAF35F7DE31055F89C2E41D654AE4122C150E177EB7EDAF2DF8AB2BE9587D; xm_link_history=UMHKqCZ1EprNK0P6IhPIOn54%2BDoK1OlUa%2BsV9Zf%2FBS0%3D; xm_order_btauth=ff0fee403b51394afdf7ebe826683b1f; userId=172011891; XM_172011891_UN=.%E4%B8%B8%E5%AD%90; mudjc=12481.0001l0dRF964opwNJYn55aef160129092900; msttime=http%3A%2F%2Fitem.mi.com%2Fbuyphone%2Fhongmi2; msttime1=http%3A%2F%2Fitem.mi.com%2Fbuyphone%2Fhongmi2; lastsource=a.union.mi.com; mstz=766dbbdcc6eafc2c-f572de5474b4f279|%2F%2Fitem.mi.com%2Fbuyphone%2Fhongmi2|1108113993.13|pcpid|http%3A%2F%2Fwww.mi.com%2Fhongmi2%2F|http%3A%2F%2Fwww.mi.com%2F; mstuid=1453378297020_4069; xm_vistor=1453378297020_4069_1454030961064-1454031012660; xm_user_www_num=2')
// 	.end(function(err,res){
// 		var time = (res.res.text).match(/\d+/g)[0]*1000;
		// if(time > 1454032798000){
				a();
		// }
// 		console.log(new Date(time));
// });},500);
//checkout

//http://order.mi.com/buy/checkoutPreCheck.php?r=50613.1453960470&jsonpcallback=jQuery1113000016070972196757793_1453960451290&_=1453960451292

//jsonpcallback=jQuery11130607881473377347_1453959875380&_=1453959875383

//http://order.mi.com/buy/checkoutPreCheck.php?r=50613.1453960470&jsonpcallback=jQuery11130607881473377347_1453959875380&_=1453959875383

/*
muuid=1450770821802_2635; xmuuid=XMGUEST-976AEF60-C0A6-11E5-834E-79B11ECF98D2; XM_172011891_UN=.%E4%B8%B8%E5%AD%90; _newdevuuid=I1D5ftKnOayvI9zdSiBYh1OGIOfX9IrvTvTbIwaBwOaUhIUO77bcfznWqwIzzQeOM9qRjJp5MSeis5YxstEUQ53QPFGtpwZundIzpT6UY983gcTIqmCJt8qJET29AdWXSzzhq1CCw2XoineYZbmo7WkIiRG4KKlVb4tKAyMiFBkpY013SxjhCIe6MrdAQ2t4zkA2VbMN; _mmsid=1453949121424.6199; Hm_lvt_4982d57ea12df95a2b24715fb6440726=1453949122; Hm_lpvt_4982d57ea12df95a2b24715fb6440726=1453949122; xm_link_history=%2FmbMDmXCucXOx%2BkC7vXn3B8LZ1ptrijbhb6UGhovc4c%3D; xm_order_btauth=ff0fee403b51394afdf7ebe826683b1f; userId=172011891; AWSELB=717359E51ECF69FBB072CF5F1FD918BF783E0B6A308C3077802E17DF9B411621A6CC1C67F639F5EC59DBF0BF17CF4741C2E2AD16BD35F294C33D34BCE3FDAC843C8FA1B31A; msttime=http%3A%2F%2Fstatic.mi.com%2Fcart%2F; msttime1=http%3A%2F%2Fstatic.mi.com%2Fcart%2F; xm_user_www_num=1; lastsource=s1.mi.com; mstz=08fae3d5cb3abaaf-5b1e31a52befa8ca|javascript%3Avoid(0)%3B|1244598607.113|pcpid|http%3A%2F%2Fwww.mi.com%2Fmi4%2F|http%3A%2F%2Fstatic.mi.com%2Fcart%2F; mstuid=1453425744489_2785; xm_vistor=1453425744489_2785_1453959287121-1453960454783
*/

//服务器时间
/*
https://tpssl.hd.mi.com/gettimestamp
request:  var servertime=1453962773
*/

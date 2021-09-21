var spec_char_n = "\n";
var spec_char_rn = "\r\n";

function jqueryinitwait(callback)
{
	if(callback == null) return;
	//
	if(typeof(jQuery) == 'undefined')
	{
		setTimeout(function(){jqueryinitwait(callback);},260);
	}
	else{
		callback();
	}
}
//
function headad1()
{
	document.writeln("<div class=\"container\" style=\"padding-right:10px;padding-bottom:20px;margin-top:-25px;\">");
	document.writeln("	<ins class=\"adsbygoogle\"");
	document.writeln("		 style=\"display:block;min-height:50px;max-height:200px;height:100%;\"");
	document.writeln("		 data-ad-client=\"ca-pub-8076913890457082\"");
	document.writeln("		 data-ad-slot=\"4978279493\"");
	document.writeln("		 data-ad-format=\"auto\"");
	document.writeln("		 data-full-width-responsive=\"true\"></ins>");
	document.writeln("</div>");
	(adsbygoogle = window.adsbygoogle || []).push({});
}

function middlead1()
{
	document.writeln("<div style=\"padding-right:10px;margin-top:-25px;\">");
	document.writeln("	<ins class=\"adsbygoogle\"");
	document.writeln("		 style=\"display:block;min-height:50px;max-height:200px;height:100%;\"");
	document.writeln("		 data-ad-client=\"ca-pub-8076913890457082\"");
	document.writeln("		 data-ad-slot=\"2323726805\"");
	document.writeln("		 data-ad-format=\"auto\"");
	document.writeln("		 data-full-width-responsive=\"true\"></ins>");
	document.writeln("</div>");
	(adsbygoogle = window.adsbygoogle || []).push({});
}

function footerhad1()
{
	// document.writeln("<div class=\"container\" style=\"padding-right:10px;margin-top:-25px;\">");
	// document.writeln("	<ins class=\"adsbygoogle\"");
	// document.writeln("		 style=\"display:block;min-height:50px;max-height:200px;height:100%;\"");
	// document.writeln("		 data-ad-client=\"ca-pub-8076913890457082\"");
	// document.writeln("		 data-ad-slot=\"9734957741\"");
	// document.writeln("		 data-ad-format=\"auto\"");
	// document.writeln("		 data-full-width-responsive=\"true\"></ins>");
	// document.writeln("</div>");
	// (adsbygoogle = window.adsbygoogle || []).push({});
}

function contenttopad1()
{
	document.writeln("<div style=\"margin-bottom:10px;\">");
	document.writeln("	<ins class=\"adsbygoogle\"");
	document.writeln("		 style=\"display:block;min-height:50px;max-height:200px;height:100%;\"");
	document.writeln("		 data-ad-client=\"ca-pub-8076913890457082\"");
	document.writeln("		 data-ad-slot=\"2322543606\"");
	document.writeln("		 data-ad-format=\"auto\"");
	document.writeln("		 data-full-width-responsive=\"true\"></ins>");
	document.writeln("</div>");
	(adsbygoogle = window.adsbygoogle || []).push({});
}
function contentbottomad1()
{
	document.writeln("<div style=\"margin-top:10px;\">");
	document.writeln("<ins class=\"adsbygoogle\"");
	document.writeln("     style=\"display:block\"");
	document.writeln("     data-ad-format=\"fluid\"");
	document.writeln("     data-ad-layout-key=\"-fb+5w+4e-db+86\"");
	document.writeln("     data-ad-client=\"ca-pub-8076913890457082\"");
	document.writeln("     data-ad-slot=\"3832698645\"></ins>");
	document.writeln("</div>");
	(adsbygoogle = window.adsbygoogle || []).push({});
}
function contentrightad1()
{
    document.writeln("<div>");	
	document.writeln("	<ins class=\"adsbygoogle\"");
	document.writeln("		 style=\"display:block;\"");
	document.writeln("		 data-ad-client=\"ca-pub-8076913890457082\"");
	document.writeln("		 data-ad-slot=\"4972526163\"");
	document.writeln("		 data-ad-format=\"auto\"");
	document.writeln("		 data-full-width-responsive=\"true\"></ins>");
	document.writeln("</div>");
	(adsbygoogle = window.adsbygoogle || []).push({});
}

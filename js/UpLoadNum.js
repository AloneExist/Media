(function ($) {
	$.fn.ShadowRing = function (options) {
		var defaults = {
			r: 180,
			ti: 25,
			count: 100,
			offset: 20,
			fontsize: 30,
			fontfamily: "微软雅黑"
		};
		var options = $.extend(defaults, options);
		this.each(function (j, y) {
			let r = options.r;
			let ti = options.ti;
			let count = options.count;
			let offset = options.offset;
			let fontsize = options.fontsize;
			let fontfamily = options.fontfamily;

			let wi = $(y)[0].offsetWidth;
			let ht = $(y)[0].offsetHeight;
			let tp = $(y)[0].offsetTop;
			let lf = $(y)[0].offsetLeft;
			let rd = $(y).css("border-radius");
			let of = $(y).css("overflow");

			float($(y), "imgsparent");
			$(y).wrap("<div></div>");
			var par = $(y).parent();
			par.attr("id", "imgsparent").css("position", "relative").css("width", wi + 'px').css("height", ht + 'px');
			$(y).css("position", "absolute");
			par.append($("<div></div>").attr("id", "s" + j).css("position", "absolute").css("width", wi + 'px').css("height", ht + 'px').css("background-color", "#000").css("opacity", "0.4")
				.css("z-index", "1").css("left", lf + 'px').css("top", tp + 'px').css("border-radius", rd).css("overflow", of ));
			par.append($("<div></div>").attr("id", "can").css("z-index", "2").css("position", "absolute").css("width", wi + 'px').css("height", ht + 'px').css("left", lf + 'px')
				.css("top", tp + 'px').css("border-radius", rd).css("overflow", of ));
			let cv = $("<canvas></canvas>").attr("width", wi).attr("height", ht).css("font-family", fontfamily).css("letter-spacing", "3px");
			ctx = cv[0].getContext("2d");
			par.find("#can").append(cv);
			ctx.clearRect(0, 0, wi, ht);
			let bj = ht > wi ? wi / 2 - 10 : ht / 2 - 10;
			bj = r > bj ? bj : r;
			ti = parseInt(ti);
			drawRight(wi / 2, ht / 2, bj, ti, count, offset, ctx);
			drawtext(wi / 2, ht / 2, ti, ctx, fontsize);

			function float(node, prentId) {
				if (node.parent().attr("id") != prentId) {} else {
					node.siblings().remove();
					node.unwrap();
					float(node, prentId);
				}
			}

			function drawtext(x0, y0, jd, ctx, fontsize) {
				ctx.beginPath();

				ctx.fillStyle = "#0ff";
				ctx.font = fontsize + 'px ' + fontfamily;
				ctx.fillText(jd + '%', x0 - fontsize, y0 + fontsize - 10);
				ctx.closePath();
			}

			function drawRight(x0, y0, r, ti, count, offset, ctx) {
				//画右侧表针
				let Eagle = (ti * Math.PI * 2 / count) - (Math.PI / 2);

				if (ti == 1) {
					clearArc(x0, y0, r, ctx, 5);
				}

				ctx.save();
				ctx.beginPath();
				//				ctx.shadowBlur = 0;
				//				ctx.shadowColor = "#0ff";
				ctx.fillStyle = "#0ff";
				ctx.moveTo(x0, y0);
				ctx.arc(x0, y0, r, -Math.PI / 2, ti == 0 ? Math.PI * 3 / 2 : Eagle);
				ctx.fill();
				ctx.closePath();
				ctx.restore();

				clearArc(x0, y0, r - offset, ctx, 5);
				//画个圈去除锯齿
				ctx.beginPath();
				ctx.strokeStyle = "#0ff";
				ctx.arc(x0, y0, r - offset, -Math.PI / 2, ti == 0 ? Math.PI * 3 / 2 : Eagle);
				ctx.lineWidth = 1;
				ctx.stroke();

				//绘制圆角
				ctx.save();
				ctx.beginPath();
				//				ctx.shadowBlur = 0;
				//				ctx.shadowColor = "#0ff";
				ctx.fillStyle = "#0ff";
				ctx.arc(x0, y0 - r + (offset / 2), (offset / 2), Math.PI / 2, Math.PI * 3 / 2);
				ctx.fill();
				ctx.closePath();
				ctx.restore();

				ctx.save();
				ctx.beginPath();
				//				ctx.shadowBlur = 0;
				//				ctx.shadowColor = "#0ff";
				ctx.fillStyle = "#0ff";
				let scdloc = getLocation(x0, y0, r, ti, count, offset / 2);
				ctx.moveTo(scdloc[0], scdloc[1]);
				ctx.arc(scdloc[0], scdloc[1], (offset / 2), 0, Math.PI * 2);
				ctx.fill();
				ctx.closePath();
				ctx.restore();

			}

			//求坐标
			function getLocation(x0, y0, r, ti, count, offset) {
				let lct = [];
				let Eagle = ti * Math.PI * 2 / count;
				let x = x0 + (r - offset) * Math.sin(Eagle);
				let y = y0 - (r - offset) * Math.cos(Eagle);
				lct.push(x);
				lct.push(y);
				return lct;
			}

			function clearArc(x0, y0, r, ctx, smooth) {
				for (let i = 0; i < r * smooth * 2; i++) {
					let ht = Math.sqrt(r * r - (r - i / smooth) * (r - i / smooth));
					ctx.clearRect(x0 - r + i / smooth, y0 - ht, 1 / smooth, ht * 2);
				}
			}
		})
		return $(this);
	}
})(jQuery);
// import moment from 'moment';
// const utils = {
// 	isEmpty(obj) {
// 		for (var prop in obj) {
// 			if (obj.hasOwnProperty(prop)) {
// 				return false;
// 			}
// 		}

// 		return JSON.stringify(obj) === JSON.stringify({});
// 	},

// 	fortmatDate(date, format="MMM Do YYYY, h:mm A") {
// 		const objMoment = moment(date).utc();
// 		return objMoment.format(format);
// 	},
// };



// Array.prototype.range = function (a, b, step = 1) {
// 	step = !step ? 1 : step;
// 	b = b / step;
// 	for (var i = a; i <= b; i++) {
// 		this.push(i * step);
// 	}
// 	return this;
// };

// export default utils;
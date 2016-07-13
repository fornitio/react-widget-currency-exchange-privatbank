export default {
	config : {
		method : 'GET',
		mode: 'cors'
		},
	url : 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=4',
	privatBankImg : 'https://secure.privatbank.ua/quickpay/img/logo-pic.gif',
	containerStyle : {
		width:'178px',
		margin:0,
		padding:0,
		border:'1px solid #2D6AB4',
		fontSize:'11px',
		background:'#f0f0f0'
		},
	headerStyle : {
		//width:'178px',
		textAlign:'center',
		padding:'2px 0px',
		background:'#2D6AB4',
		fontFamily:'arial',
		color:'#FFFFFF',
		fontWeight:'bold',
		verticalAlign:'middle'
	},
	imgStyle : {
		paddingRight:'5px',
		width: '16px',
		height: '11px'
	},
	titleStyle : {
		color:'#FFFFFF',
		textDecoration:'none',
		textTransform:'uppercase'
	},
	innerDiv :{
		padding:'5px',
		textAlign:'center'
	},
	tableStyle :{
		width:'168px',
		color: '#000000',
		fontFamily: 'arial',
		background:'#f0f0f0'
	}
}
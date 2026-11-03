import { ImageResponse } from 'next/og';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function OpenGraphImage() {
 return new ImageResponse(<div style={{display:'flex', width:'100%', height:'100%', background:'#0a0e14', color:'#e0e0e0', padding:'80px', flexDirection:'column', justifyContent:'center', fontFamily:'sans-serif'}}><div style={{color:'#22d3ee', fontSize:24, letterSpacing:4, marginBottom:40}}>PORTFOLIO / CYBERSÉCURITÉ</div><div style={{fontSize:72, fontWeight:700}}>Gédéon Cibanvunya</div><div style={{height:4, width:100, background:'#22d3ee', marginTop:32, marginBottom:32}}/><div style={{fontSize:30, color:'#a8b9cb'}}>Projets · Labs · Développement sécurité</div></div>, size);
}

import { AlurakutProfileSidebarMenuDefault } from '../AluraCommons';
import Box from '../Box';

function Sidebar({ user }) {
	return (
		<div className="profileArea" style={{ gridArea: 'profileArea' }}>
			<Box as="aside">
				<img src={`https://github.com/${user}.png`} style={{ borderRadius: '8px' }}></img>
				<hr />
				<a href={`https://github.com/${user}`} className="boxLink">
					@{user}
				</a>
				<hr />
				<AlurakutProfileSidebarMenuDefault />
			</Box>
		</div>
	);
}
export default Sidebar;

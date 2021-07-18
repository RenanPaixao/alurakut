import Box from '../src/components/Box';
import Main from '../src/components/Main';

function Sidebar({ user }) {
	return (
		<div className="profileArea" style={{ gridArea: 'profileArea' }}>
			<Box>
				<img src={`https://github.com/${user}.png`} style={{ borderRadius: '8px;' }}></img>
			</Box>
		</div>
	);
}
export default function Home() {
	const githubUser = 'RenanPaixao';
	return (
		<Main>
			<Sidebar user={githubUser}></Sidebar>
			<div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
				<Box>Bem vindo(a)</Box>
			</div>
			<div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
				<Box>Friends</Box>
			</div>
		</Main>
	);
}

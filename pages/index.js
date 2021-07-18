import Box from '../src/components/Box';
import Main from '../src/components/Main';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/components/AluraCommons';
import ProfileRelationsBoxWrapper from '../src/components/ProfileRelations/style';

function Sidebar({ user }) {
	return (
		<div className="profileArea" style={{ gridArea: 'profileArea' }}>
			<Box>
				<img src={`https://github.com/${user}.png`} style={{ borderRadius: '8px;' }}></img>
			</Box>
		</div>
	);
}
function AddRelations() {
	const relations = ['omariosouto', 'filipedeschamps', 'marcobrunodev'];
	return (
		<>
			<h2 className="smallTitle">Relações</h2>
			<ul>
				{relations.map((element) => {
					return (
						<li key={element}>
							<a href={`/users/${element}`}>
								<img src={`https://github.com/${element}.png`}></img>
								<span>{element}</span>
							</a>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default function Home() {
	const githubUser = 'RenanPaixao';
	return (
		<>
			<AlurakutMenu githubUser={githubUser} />
			<Main>
				<Sidebar user={githubUser}></Sidebar>
				<div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
					<Box>
						<h1 className="title">Bem vindo(a)</h1>
						<OrkutNostalgicIconSet />
					</Box>
				</div>
				<div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
					<ProfileRelationsBoxWrapper>
						<AddRelations />
					</ProfileRelationsBoxWrapper>
				</div>
			</Main>
		</>
	);
}

import Box from '../src/components/Box';
import Main from '../src/components/Main';
import { AlurakutMenu } from '../src/components/AluraCommons';
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
						<li>
							<a href={`/users/${element}`} key={element}>
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
					<Box>Bem vindo(a)</Box>
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

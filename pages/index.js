import Box from '../src/components/Box';
import Main from '../src/components/Main';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/components/AluraCommons';
import ProfileRelationsBoxWrapper from '../src/components/ProfileRelations/style';

function Sidebar({ user }) {
	return (
		<div className="profileArea" style={{ gridArea: 'profileArea' }}>
			<Box>
				<img src={`https://github.com/${user}.png`} style={{ borderRadius: '8px' }}></img>
				<hr />
				<a href={`https://github.com/${user}`} className="boxLink">
					@{user}
					<hr />
				</a>
				<AlurakutProfileSidebarMenuDefault />
			</Box>
		</div>
	);
}
function AddRelations() {
	const relations = ['omariosouto', 'filipedeschamps', 'marcobrunodev'];
	return (
		<>
			<h2 className="smallTitle">Afinidades</h2>
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
					<Box>
						<h2 className="subtitle">O que deseja fazer?</h2>
						<hr />
						<form
							onSubmit={(e) => {
								e.preventDefault();
								const data = new FormData(e.target);

								const community = { title: data.get('title'), image: data.get('image') };
							}}
						>
							<input
								type="text"
								name="title"
								placeholder="Qual será o nome da sua comunidade?"
								aria-label="Qual será o nome da sua comunidade?"
							></input>
							<input
								name="image"
								aria-label="Qual URL usaremos de capa?"
								placeholder="Qual URL usaremos de capa?"
								type="text"
							></input>
							<button>Criar comunidade</button>
						</form>
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

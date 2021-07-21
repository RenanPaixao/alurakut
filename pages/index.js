import { useState, useEffect } from 'react';
import Box from '../src/components/Box';
import Main from '../src/components/Main';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/components/AluraCommons';
import ProfileRelationsBoxWrapper from '../src/components/ProfileRelations/style';

function Sidebar({ user }) {
	return (
		<div className="profileArea" style={{ gridArea: 'profileArea' }}>
			<Box as="aside">
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
function AddRelations({ req, title }) {
	return (
		<>
			<h2 className="smallTitle">{title}</h2>
			<ul>
				{req.map((element) => {
					return (
						<li key={element.login}>
							<a href={`/users/${element.login}`}>
								<img src={`https://github.com/${element.login}.png`}></img>
								<span>{element.login}</span>
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
	const [affinities, setAffinities] = useState(false);

	useEffect(() => {
		fetch(`https://api.github.com/users/${githubUser}/followers`)
			.then((res) => {
				return res.json();
			})
			.then((res) => setAffinities(res))
			.catch((e) => console.error(e));
	}, []);

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
						{affinities ? <AddRelations req={affinities} title="Afinidades" /> : 'CARREGANDO...'}
					</ProfileRelationsBoxWrapper>
				</div>
			</Main>
		</>
	);
}

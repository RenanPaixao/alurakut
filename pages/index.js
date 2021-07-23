import { useState, useEffect } from 'react';
import Box from '../src/components/Box';
import Main from '../src/components/Main';

import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/components/AluraCommons';
import ProfileRelationsBoxWrapper from '../src/components/ProfileRelations';

import Sidebar from '../src/components/Sidebar';
import AddAffinities from '../src/components/AddAffinities';

const URL = 'https://api.github.com/users';

export default function Home() {
	const [affinities, setAffinities] = useState(false);
	const [more, setMore] = useState(1);

	const githubUser = 'RenanPaixao';
	const URL_PAG = `${URL}/${githubUser}/followers?per_page=6&page=${more}`;

	useEffect(() => {
		fetch(URL_PAG)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setAffinities(res);
			})
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
						{affinities ? <AddAffinities req={affinities} title="Afinidades" /> : 'CARREGANDO...'}
						<hr />
						{affinities && (
							<a href="/affinities" style={{ textDecoration: 'none', color: '#308BC5' }}>
								Ver mais...
							</a>
						)}
					</ProfileRelationsBoxWrapper>
				</div>
			</Main>
		</>
	);
}

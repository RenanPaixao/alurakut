export function WrapperAffinities({ req, title }) {
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

export function WrapperCommunities({ req, title }) {
	return (
		<>
			<h2 className="smallTitle">{title}</h2>
			<ul>
				{req.map((element) => {
					return (
						<li key={element.id}>
							<a href={`/users/${element.title}`}>
								<img src={element.imageurl}></img>
								<span>{element.title}</span>
							</a>
						</li>
					);
				})}
			</ul>
			<hr />
		</>
	);
}

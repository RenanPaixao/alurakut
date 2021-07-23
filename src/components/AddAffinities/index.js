function AddAffinities({ req, title }) {
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

export default AddAffinities;

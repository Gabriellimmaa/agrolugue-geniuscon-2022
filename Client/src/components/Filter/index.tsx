import './styles.css'

interface FilterProps {
  title: string
  opcoes: string[]
}

export function Filter({ title, opcoes }: FilterProps) {
  return (
    <div className="filter overflow-y-auto scroll-syles">
      <div className="filter-body">
        <form action="" method="post">
          <div className="opcoes">
            <div className="filter-search">
              <h5 className="filter-title">Pesquisa</h5>
              <span className="relative text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    className="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="q"
                  className="py-2 text-sm text-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                  placeholder="Digite a região..."
                  autoComplete="off"
                />
              </span>
            </div>
            <div>
              <h5 className="filter-title">{title}</h5>
              <ul>
                {opcoes.map((opcao) => {
                  return (
                    <li key={opcao}>
                      <input type="checkbox" />
                      <label>{opcao}</label>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div>
              <h5 className="filter-title">{title}</h5>
              <ul>
                {opcoes.map((opcao) => {
                  return (
                    <li key={opcao}>
                      <input type="checkbox" />
                      <label>{opcao}</label>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div>
              <h5 className="filter-title">{title}</h5>
              <ul>
                {opcoes.map((opcao) => {
                  return (
                    <li key={opcao}>
                      <input type="checkbox" />
                      <label>{opcao}</label>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div>
              <h5 className="filter-title">{title}</h5>
              <ul>
                {opcoes.map((opcao) => {
                  return (
                    <li key={opcao}>
                      <input type="checkbox" />
                      <label>{opcao}</label>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

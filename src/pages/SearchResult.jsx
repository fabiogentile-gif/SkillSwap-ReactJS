import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

import './Styles/SearchResult.css'

export default function SearchResult() {
    const [users, setUsers] = useState([]);
    const [services, setServices] = useState([]);
    const [categories, setCategories] = useState([]);

    const [searchParams] = useSearchParams();

    const query = searchParams.get("q") || "";

    useEffect(() => {
        async function getResults() {
            try {
                const resUsers = await fetch("/api/users");
                const resServices = await fetch("/api/services");
                const resCategories = await fetch("/api/categories");

                if (!resUsers.ok || !resServices.ok || !resCategories.ok) {
                    throw new Error("Errore nel recupero dati");
                }

                const usersData = await resUsers.json();
                const servicesData = await resServices.json();
                const categoriesData = await resCategories.json();

                const filteredUsers = usersData.filter(user =>
                    user.username.toLowerCase().includes(query.toLowerCase())
                );

                const filteredServices = servicesData.filter(service =>
                    service.title.toLowerCase().includes(query.toLowerCase())
                );

                setUsers(filteredUsers);
                setServices(filteredServices);
                setCategories(categoriesData);

            } catch (err) {
                console.error(err);
            }
        }

        if (query.trim()) {
            getResults();
        }
    }, [query]);

const categoriesMap = Object.fromEntries(
    categories.map(category => [category.id, category.nome])
);

    return (
        <div className="SearchPage">

            <div className="SearchHeader">
                <h1>Risultati per "{query}"</h1>
                <p>
                    {users.length + services.length} risultati trovati
                </p>
            </div>

            <section className="ResultsSection">
                <h2>Utenti</h2>

                {users.length === 0 ? (
                    <div className="EmptyBox">
                        Nessun utente trovato
                    </div>
                ) : (
                    <div className="ResultsGrid">
                        {users.map(user => (
                            <Link
                                key={user.id}
                                to={`/user/${user.id}`}
                                className="UserCard"
                            >
                                <img
                                    src={user.avatar}
                                    alt={user.username}
                                    className="UserAvatar"
                                />

                                <div className="UserInfo">
                                    <h3>{user.username}</h3>
                                    <p>{user.bio}</p>
                                    <p>⭐{user.rating}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>

            <section className="ResultsSection">
                <h2>Servizi</h2>

                {services.length === 0 ? (
                    <div className="EmptyBox">
                        Nessun servizio trovato
                    </div>
                ) : (
                    <div className="ResultsGrid">
                        {services.map(service => (
                            <Link
                                key={service.id}
                                to={`/skill/${service.id}`}
                                className="ServiceSearchCard"
                            >
                                <div className="ServiceInfo">
                                    <h3>{service.title}</h3>

                                    <p>
                                        {service.description}
                                    </p>

                                    <span className="ServiceCategory">
                                        {categoriesMap[service.categoryId] || "Categoria sconosciuta"}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>

        </div>
    );
}
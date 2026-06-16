import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

import './Styles/SearchResult.css'

export default function SearchResult() {
    const [users, setUsers] = useState([]);
    const [services, setServices] = useState([]);

    const [searchParams] = useSearchParams();

    const query = searchParams.get("q") || "";

    useEffect(() => {
        async function getResults() {
            try {
                const [resUsers, resServices] = await Promise.all([
                    fetch("/api/users"),
                    fetch("/api/services")
                ]);

                const usersData = await resUsers.json();
                const servicesData = await resServices.json();

                const filteredUsers = usersData.filter(user =>
                    user.username.toLowerCase().includes(query.toLowerCase())
                );

                const filteredServices = servicesData.filter(service =>
                    service.title.toLowerCase().includes(query.toLowerCase())
                );

                setUsers(filteredUsers);
                setServices(filteredServices);

            } catch (err) {
                console.error(err);
            }
        }

        if (query) {
            getResults();
        }
    }, [query]);

    return (
        <div>
            <h1>Risultati per "{query}"</h1>

            <h2>Utenti</h2>
            {users.length === 0 ? (
                <p>Nessun utente trovato</p>
            ) : (
                users.map(user => (
                    <Link to={`/user/${user.id}`} className="result-card">
                        <h3>{user.username}</h3>
                    </Link>
                ))
            )}

            <h2>Servizi</h2>
            {services.length === 0 ? (
                <p>Nessun servizio trovato</p>
            ) : (
                services.map(service => (
                    <Link to={`/skill/${service.id}`} className="result-card">
                        <h3>{service.title}</h3>
                    </Link>
                ))
            )}
        </div>
    );
}
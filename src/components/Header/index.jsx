import { Link } from "react-router-dom";
import { Container, Profile, Search } from "./styles";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { useEffect, useState } from "react";

export function Header({ children }) {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <h1>Rocket Movies</h1>
      <Search>{children}</Search>
      <Profile>
        <div>
          <strong>{user.name}</strong>
          <button onClick={signOut}>sair</button>
        </div>
        <Link to="/profile">
          <img
            className="img-profile"
            src={avatarUrl}
            alt={`Foto do usuário ${user.name}`}
          />
        </Link>
      </Profile>
    </Container>
  );
}

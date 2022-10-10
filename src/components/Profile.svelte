<script>
  export let nickname;
  export let name;
</script>

<style>
    .Profile-content {
      display: flex;
      align-items: center;
    }
    .Profile-avatar img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
    .Profile-info {
      margin: 0 0 0 0.5em;
    }
    .Profile-info h2 {
      font-size: 14px;
      color: black;
      margin: 0;
      padding: 0;
    }
    .Profile-info span {
      font-size: 12px;
      font-weight: normal;
    }
  </style>
  

<div class="Profile">
    <div class="Profile-content">
        <div class="Profile-avatar">
            <img src="https://pps.whatsapp.net/v/t61.24694-24/262304261_375537471255203_2272625740834001136_n.jpg?ccb=11-4&oh=01_AVwULhALma466RzTHHMCXRwN8nvi1LWmbVaCEIP66URZ6A&oe=63519AE0" alt="Perfil">
        </div>
        <div class="Profile-info">
            <h2>{nickname}</h2>
            <span>{name}</span>
        </div>
    </div>
</div>
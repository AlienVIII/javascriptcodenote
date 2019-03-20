
// for set up SSH Key
cd ~/.ssh
sudo chmod 600 SHH_Key
sudo chmod 600 SHH_Key.pub
ssh-add -D
ssh-agent
ssh-add SHH_Key


import {
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  Box,
  Divider,
  Typography,
} from '@mui/material'
import {
  Checkroom as CheckroomIcon,
  Chair as ChairIcon,
  Blender as BlenderIcon,
  Headphones as HeadphonesIcon,
  MusicNote as MusicNoteIcon,
  Diamond as DiamondIcon,
} from '@mui/icons-material'
import { BottomNav } from '../../components/Bottom-Navigation/BottomNav'
import { Header } from '../../components/Header/Header'

const Categories = () => (
  <>
    <Header />
    <div style={{ marginTop: '80px' }}>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '' }}>
        <List>
          <ListItem>
            <ListItemButton component="a" href="/categories/clothes">
              <ListItemIcon>
                <CheckroomIcon />
              </ListItemIcon>
              <Typography gutterBottom variant="h6" color="textPrimary">
                Clothes, Shoes & Accessories
              </Typography>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton component="a" href="/categories/jewellery">
              <ListItemIcon>
                <DiamondIcon />
              </ListItemIcon>
              <Typography gutterBottom variant="h6" color="textPrimary">
                Jewellery
              </Typography>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton component="a" href="/categories/furniture">
              <ListItemIcon>
                <ChairIcon />
              </ListItemIcon>
              <Typography gutterBottom variant="h6" color="textPrimary">
                Furniture
              </Typography>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton component="a" href="/categories/appliances">
              <ListItemIcon>
                <BlenderIcon />
              </ListItemIcon>
              <Typography gutterBottom variant="h6" color="textPrimary">
                Small Appliances
              </Typography>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton component="a" href="/categories/electronics">
              <ListItemIcon>
                <HeadphonesIcon />
              </ListItemIcon>
              <Typography gutterBottom variant="h6" color="textPrimary">
                Electronics
              </Typography>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton component="a" href="/categories/music">
              <ListItemIcon>
                <MusicNoteIcon />
              </ListItemIcon>
              <Typography gutterBottom variant="h6" color="textPrimary">
                Music Instruments & Equipment
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </div>
    <BottomNav />
  </>
)

export { Categories }
